import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  // ✅ URLs
  const AUTH_URL = "http://localhost:4001";   // auth microservice
  const BASE_URL = "http://localhost:4000";   // old backend

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  // 🛒 Add to cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      try {
        const response = await axios.post(
          BASE_URL + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success("Item added to cart");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error adding to cart");
      }
    }
  };

  // ➖ Remove from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token) {
      try {
        const response = await axios.post(
          BASE_URL + "/api/cart/remove",
          { itemId },
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success("Item removed from cart");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error removing item");
      }
    }
  };

  // 💰 Total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  // 🍔 Fetch food list
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(BASE_URL + "/api/food/list");

      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        toast.error("Error fetching food");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
    }
  };

  // 🛒 Load cart data
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        BASE_URL + "/api/cart/get",
        {},
        { headers: { token } }
      );

      setCartItems(response.data.cartData);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔄 Load data on start
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }

    loadData();
  }, []);

  // 🌐 Context values
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    BASE_URL,
    AUTH_URL,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;