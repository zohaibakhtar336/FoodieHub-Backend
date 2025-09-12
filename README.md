# FoodieHub 🍔

A RESTful API for a Food Ordering Application built with **Node.js, Express.js, and MongoDB**.
This project includes authentication, user management, restaurants, categories, foods, and order placement.

---

## 🚀 Features

- User Authentication (Register/Login) with **JWT**
- Role-based Access (Client, Admin, Vendor, Driver)
- CRUD operations for:
  - Categories
  - Foods
  - Restaurants
  - Users
- Place orders and update order status
- Middleware for authentication & admin access
- Data seeding support for restaurants & foods
- RESTful API endpoints with structured responses

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime for backend development.
- **Express.js** – Web framework for building APIs.
- **MongoDB** – NoSQL database for storing data.
- **Mongoose** – ODM to interact with MongoDB easily.
- **JWT** – JSON Web Tokens for authentication.
- **bcryptjs** – Library for hashing passwords securely.
- **dotenv** – Load environment variables from `.env` file.
- **CORS** – Middleware to handle Cross-Origin requests.
- **Morgan** – HTTP request logger middleware.
- **Colors** – Add colors to console outputs for better readability.

---

## 📌 API Endpoints

### 1. Test

| Method | Endpoint                  | Description        | Auth Required |
|--------|---------------------------|--------------------|---------------|
| GET    | /api/v1/test/test-user    | Test API endpoint  | No            |

---

### 2. Authentication

| Method | Endpoint                 | Description           | Auth Required |
|--------|--------------------------|-----------------------|---------------|
| POST   | /api/v1/auth/register    | Register a new user   | No            |
| POST   | /api/v1/auth/login       | Login a user          | No            |

---

### 3. Users

| Method | Endpoint                       | Description                        | Auth Required |
|--------|--------------------------------|------------------------------------|---------------|
| GET    | /api/v1/user/getUser           | Get logged-in user info            | Yes           |
| PUT    | /api/v1/user/updateUser        | Update user profile info           | Yes           |
| POST   | /api/v1/user/updatePassword    | Update user password               | Yes           |
| POST   | /api/v1/user/resetPassword     | Reset password with email & answer | Yes           |
| DELETE | /api/v1/user/deleteUser/:id    | Delete a user account              | Yes           |

---

### 4. Categories

| Method | Endpoint                        | Description            | Auth Required |
|--------|---------------------------------|------------------------|---------------|
| POST   | /api/v1/category/create         | Create a new category  | Yes           |
| GET    | /api/v1/category/getAll         | Get all categories     | No            |
| PUT    | /api/v1/category/update/:id     | Update a category      | Yes           |
| DELETE | /api/v1/category/delete/:id     | Delete a category      | Yes           |

---

### 5. Foods

| Method | Endpoint                                | Description                     | Auth Required |
|--------|-----------------------------------------|---------------------------------|---------------|
| POST   | /api/v1/food/create                     | Create a new food item          | Yes           |
| GET    | /api/v1/food/getAll                     | Get all food items              | No            |
| GET    | /api/v1/food/get/:id                    | Get a single food item          | No            |
| GET    | /api/v1/food/getByRestaurant/:id        | Get all foods by restaurant     | No            |
| PUT    | /api/v1/food/update/:id                 | Update a food item              | Yes           |
| DELETE | /api/v1/food/delete/:id                 | Delete a food item              | Yes           |
| POST   | /api/v1/food/place-order                | Place an order                  | Yes           |
| POST   | /api/v1/food/orderStatus/:id            | Update order status (Admin only)| Yes + Admin   |

---

### 6. Restaurants

| Method | Endpoint                        | Description                | Auth Required |
|--------|---------------------------------|----------------------------|---------------|
| POST   | /api/v1/restaurant/create       | Create a new restaurant    | Yes           |
| GET    | /api/v1/restaurant/getAll       | Get all restaurants        | No            |
| GET    | /api/v1/restaurant/get/:id      | Get restaurant by ID       | No            |
| DELETE | /api/v1/restaurant/delete/:id   | Delete a restaurant        | Yes           |

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the project root and add the following:

```env
# Server Port
PORT=8000

# MongoDB connection string
MONGO_URL=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key
