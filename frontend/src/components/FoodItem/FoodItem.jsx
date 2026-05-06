import React, { useContext } from "react";
/* eslint-disable react/prop-types */
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const context = useContext(StoreContext);

  if (!context) return null;

  const {
    cartItems = {},
    addToCart,
    removeFromCart,
    BASE_URL,
  } = context;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={BASE_URL + "/images/" + image}
          alt=""
          className="food-item-image"
        />

        {!cartItems?.[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems?.[id] || 0}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;