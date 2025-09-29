# Node.js Redis MongoDB API

A REST API built with Node.js, Express, MongoDB, and Redis following Repository-Service-Controller architecture.

## 🚀 Quick Start

1. **Install dependencies**
   npm install

2. **Set up environment**

3. **Start services**
   # Start MongoDB
   # Start Redis
   redis-server
   
5. **Run the app**
   npm start
   
### Create User
```bash
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get User
GET /users/:id

## 🏗️ Architecture

- **Controller**: HTTP request/response handling
- **Service**: Business logic and validation  
- **Repository**: Database operations (MongoDB + Redis caching)

## 📋 Features

- ✅ Redis caching for performance
- ✅ MongoDB as primary database
- ✅ Error handling
- ✅ Environment configuration

## 📁 Project Structure

```
├── app.js                 # Main application
├── config/               # Database connections
├── controllers/          # HTTP handlers
├── models/              # Database schemas
├── repository/          # Data access layer
└── services/            # Business logic
