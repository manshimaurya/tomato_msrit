# Tomato rebuilt with Microservices Ver.1.0

## Project Title

**Tomato Built with Microservices**  
A System Programming academic project focused on transforming an existing monolithic food delivery platform into a scalable, containerized microservices-based distributed system.

---

## Team Members

| Role                           | Member          | Responsibility                                  |
| ------------------------------ | --------------- | ----------------------------------------------- |
| Captain / Project Lead         | Manshi Maurya   | Pick your poison bro                            |
| Chief Technology Officer (CTO) | Abid S K        | Core codebase acquisition, pick your poison bro |
| Intern                         | Adarsh Sadanand | Dockerization, pick your poison                 |

> _Additional responsibilities should be picked and finalized as module ownership becomes clearer._

---

## Current Status

The project is presently in the **foundation and architecture planning stage**.

### Ongoing Work:

- Received and analyzed Abid's working MERN source files.
    
- Establishing a shared GitHub repository for synchronized team development.
    
- Reviewing database options and service-wise data separation strategy.
    
- Learning and experimenting with Docker for containerizing independent services.
    
- Studying Kubernetes fundamentals for future orchestration and scaling.
    
- Preparing baseline technical documentation before migration begins.
    

At this stage, the existing application acts as the **reference monolith** from which all future services will be extracted.

---

## Objective

The primary objective of this project is to **re-engineer a traditional monolithic MERN stack food delivery application into a distributed microservices architecture consisting of 6–7 independent services**.

### Planned Technical Utilization:

- **Docker** for containerization of each service.
    
- **Kubernetes** for orchestration and service management.
    
- **REST API / Internal Service Communication** for module interaction.
    
- **GitHub-based collaborative workflow** for team development.
    

---

## Existing Modules (Current Monolith Baseline)

The source application currently consists of the following tightly coupled modules:

### 1. Frontend

Customer-facing web interface where users can:

- browse food items,
    
- add products to cart,
    
- place orders,
    
- manage authentication.
    

### 2. Backend

Central Node.js + Express server handling:

- authentication,
    
- order processing,
    
- payment logic,
    
- database communication,
    
- API management.
    

### 3. Admin Panel

Administrative dashboard used for:

- food item management,
    
- order tracking,
    
- product updates,
    
- operational monitoring.
    

These three modules currently function as one integrated monolithic application.

---

## Proposed Microservice Transformation Scope

The monolithic backend will be decomposed into approximately **6–7 independent services**, tentatively including:

1. **User Authentication Service**
    
2. **Product/Menu Service**
    
3. **Cart Service**
    
4. **Order Management Service**
    
5. **Payment Service**
    
6. **Admin Management Service**
    
7. **API Gateway / Notification / Utility Service** _(subject to final architecture decisions)_
    

Each service will:

- run in its own Docker container,
    
- maintain isolated business responsibility,
    
- communicate through APIs,
    
- be orchestrated under Kubernetes.
    

---

## Future Enhancements

Once the service migration is complete, the project will be extended toward public deployment and production-readiness.

### Planned Enhancements Include:

- Cloud hosting of all microservices.
    
- Public domain deployment for demonstration.
    
- Kubernetes cluster orchestration.
    
- CI/CD automation for builds and updates.
    
- Monitoring and logging integration.
    
- Improved security and authentication hardening.
    
- Performance benchmarking between monolith vs microservices.
    

---

## Repository Structure

```text
tomato_msrit/
│
├── frontend/                  # Customer web application
├── backend/                   # Existing monolithic backend baseline
├── admin/                     # Administrative dashboard
│
├── services/                  # Upcoming microservice modules
│   ├── auth-service/
│   ├── product-service/
│   ├── cart-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── admin-service/
│   └── gateway-service/
│
├── docs/                      # Planning and architecture documentation
│   ├── PROJECT_FLOW.md
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── TEAM_NOTES.md
│   ├── TO_DO_DONE.md
│   └── MICROSERVICE_PLAN.md
│
├── docker-compose.yml         # Local multi-container orchestration
├── kubernetes/                # Deployment manifests (future)
├── .gitignore
└── README.md
```

---

## Development Note

This repository currently represents the **transition from an educational MERN monolith into a collaborative distributed systems engineering project**.  
All future commits, service extraction, and deployment configurations will be tracked against this baseline.

---

_Prepared as the initial professional project note for repository documentation and team alignment._