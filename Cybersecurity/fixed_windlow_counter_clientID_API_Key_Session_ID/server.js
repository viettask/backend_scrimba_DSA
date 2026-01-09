import express from 'express'; 
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = 3000;

const limiter = rateLimit({
  limit: 3,
  windowMs: 10000,
  message: "Too many requests, please try again later",
  standardHeaders: true, //defaults to false
  legacyHeaders: false, //defaults to true
  keyGenerator: (req) => req.session.id,
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