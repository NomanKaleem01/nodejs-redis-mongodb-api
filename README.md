# Node.js Redis MongoDB API

A REST API built with Node.js, Express, MongoDB, and Redis following Repository-Service-Controller architecture.

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   ```

3. **Start services**
   ```bash
   # Start MongoDB
   mongod
   
   # Start Redis
   redis-server
   ```

4. **Run the app**
   ```bash
   npm start
   ```

## 📡 API Endpoints

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
```bash
GET /users/:id
```

## 🧪 Test with cURL

```bash
# Create user
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

# Get user
curl -X GET http://localhost:5000/users/USER_ID_HERE
```

## 🏗️ Architecture

- **Controller**: HTTP request/response handling
- **Service**: Business logic and validation  
- **Repository**: Database operations (MongoDB + Redis caching)

## 📋 Features

- ✅ Redis caching for performance
- ✅ MongoDB as primary database
- ✅ Input validation
- ✅ Error handling
- ✅ Environment configuration

## 🔧 Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/redis
REDIS_URL=redis://localhost:6379
PORT=5000
NODE_ENV=development
REDIS_TTL=3600
```

## 📁 Project Structure

```
├── app.js                 # Main application
├── config/               # Database connections
├── controllers/          # HTTP handlers
├── models/              # Database schemas
├── repository/          # Data access layer
└── services/            # Business logic
```

---

**Built with ❤️ using Node.js, Express, MongoDB, and Redis**
