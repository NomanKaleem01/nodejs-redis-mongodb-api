const userRepository = require("../repository/user");

  async function createUser(userData) {
    const { name, email } = userData;

    if (!name || !email) {
      throw new Error("Name and Email are required");
    }
    const savedUser = await userRepository.createUser({ name, email });

    // Store in Redis cache
    await userRepository.setUserInCache(savedUser._id, savedUser, 3600);

    return savedUser;
  }

  // Get user by ID with cache-first strategy
  async function getUserById(id) {
    // Validate ObjectId format
    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
      throw new Error("Invalid user ID format");
    }

    // First, try to get from Redis cache
    const cachedUser = await userRepository.getUserFromCache(id);

    if (cachedUser) {
      return { from: "redis", user: cachedUser };
    }

    // If not in cache, fetch from MongoDB
    const user = await userRepository.findUserById(id);

    if (!user) {
      throw new Error("User not found");
    }

    // Store fresh data in cache for future requests
    await userRepository.setUserInCache(user._id, user, 3600);

    return { from: "mongodb", user };
  }

  

module.exports = { createUser, getUserById };
