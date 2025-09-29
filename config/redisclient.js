const { createClient } = require("redis");

const redisClient = createClient({ url: process.env.REDIS_URL});

redisClient.on("error", (err) => console.error("Redis Error:", err));
redisClient.connect();

const cache = {
  async set(key, value, ttl = 3600) { // ttl = 1 hour
    await redisClient.set(key, JSON.stringify(value), { EX: ttl });
  },
  async get(key) {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  },
  async del(key) {
    await redisClient.del(key);
  },
};

module.exports = cache;
