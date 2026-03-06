# User Management API (MongoDB + Express)

## 📌 Objective

A full REST API built using **Node.js, Express.js, and MongoDB (Mongoose)** to manage user data.

This project demonstrates:

* REST API architecture
* MongoDB database integration
* CRUD operations
* Schema validation with Mongoose
* Proper HTTP status codes
* API testing using Postman

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* Render Deployment

---

# 📁 Project Structure

```
Server_HW
│
├ index.js
├ package.json
├ package-lock.json
└ README.md
```

---

# 📊 User Schema

Each user follows this structure:

```json
{
  "name": "Ansh",
  "email": "ansh@gmail.com",
  "password": "123456"
}
```

### Schema Validation

* **name**

  * Type: String
  * Minimum length: 2

* **email**

  * Type: String
  * Required
  * Unique
  * Stored in lowercase

* **password**

  * Type: String
  * Required
  * Minimum length: 6

---

# 🚀 API Routes

| Method | Route         | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/users`      | Get all users         |
| GET    | `/users/:id`  | Get user by ID        |
| POST   | `/users`      | Create a single user  |
| POST   | `/users/many` | Create multiple users |
| PUT    | `/users/:id`  | Replace entire user   |
| PATCH  | `/users/:id`  | Partially update user |
| DELETE | `/users/:id`  | Delete user by ID     |

---

# 📥 Example Request Bodies

### Create User

```json
{
"name": "Ansh",
"email": "ansh@gmail.com",
"password": "123456"
}
```

---

### Create Multiple Users

```json
[
{
"name": "Rahul",
"email": "rahul@gmail.com",
"password": "123456"
},
{
"name": "Kiran",
"email": "kiran@gmail.com",
"password": "123456"
}
]
```

---

### Update User (PUT)

```json
{
"name": "Updated Name",
"email": "updated@gmail.com",
"password": "abcdef"
}
```

---

### Partial Update (PATCH)

```json
{
"name": "Updated Name"
}
```

---

# 💻 Run Project Locally

Clone repository

```bash
git clone https://github.com/AnshPatel191207/Server_HW.git
```

Move to project folder

```bash
cd Server_HW
```

Install dependencies

```bash
npm install
```

Run server

```bash
node index.js
```

Server will start at:

```
http://localhost:3000
```

---

# 🌐 Render Deployment Link:



---

# 📬 Postman Documentation Link:


