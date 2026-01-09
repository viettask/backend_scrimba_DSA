import express from 'express'; 
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = 3000;

// Mock authentication middleware
// In a real app, this would validate JWT tokens, session cookies, etc.
const mockAuth = (req, res, next) => {
  // Check for user ID in header 
  const userId = req.headers['x-user-id'] || 'anonymous';

  // Attach user object to request
  req.user = {
    id: userId,
  };

  next();
};

/** 
Challenge: 
* 1. Add the property to the object passed to "rateLimit" to specify the key 
     for the rate limiter to use.
* 2. Make the key the user id from the mock auth middleware. 
*/

const limiter = rateLimit({
  limit: 3,
  windowMs: 10000,
  message: "Too many requests, please try again later",
  standardHeaders: true, //defaults to false
  legacyHeaders: false, //defaults to true
  keyGenerator: (req, res) => req.user.id,
})

// Single endpoint with rate limiter
app.get('/api/data', limiter, (req, res) => {
  res.json({
    timestamp: new Date().toLocaleTimeString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});