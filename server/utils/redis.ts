// import { createClient } from 'ioredis';
require("dotenv").config();
const redis = require("redis");

const redisClient = redis.createClient();

(async () => {
  redisClient.on("error", (err: any) => {
    console.error("Redis client error", err);
  });
  redisClient.on("ready", () => {
    console.log("redis client started");
  });
})();

// const redisClient = () => {
//   if (process.env.REDIS_URL) {
//     console.log("Redis Connected");
//     return process.env.REDIS_URL;
//   }
//   throw new Error("Redis Connection failed");
// };

// export const redis = redisClient(); // Attach this to your server

export default redisClient;
