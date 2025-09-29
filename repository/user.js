const User = require("../models/user");
const redis = require("../config/redisclient");

  async function createUser(userData) {
    const newUser = new User(userData);
    return await newUser.save();
  }

  // Find user by ID in MongoDB
  async function findUserById(id) {
    return await User.findById(id);
  }

  // Store user data in Redis cache
  async function setUserInCache(userId, userData, ttl = process.env.REDIS_TTL || 3600) {
    await redis.set(`user:${userId}`, userData, ttl);
  }

  // Get user data from Redis cache
  async function getUserFromCache(userId) {
    return await redis.get(`user:${userId}`);
  }


module.exports = { createUser, findUserById, setUserInCache, getUserFromCache };
