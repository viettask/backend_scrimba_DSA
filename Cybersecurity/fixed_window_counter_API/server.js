import express from 'express'; 
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = 3000;


/** 
Challenge 3: 
* 1. Modify the rate limiter window to allow a maximum of 3 requests in a 10 
	   second window.
* 2. Modify the "demoRateLimit" function so it waits 2 seconds before making the 
     next request.
* 3. Rerun the runner and then run the tests to see the limiter in action.
*/

/** 
Challenge 1: 
* 1. Use the package docs to create a rate limiter using the "rateLimit" 
     function.
* 2. Allow 5 requests per 60 second window.
* 3. Set a response message of, "Too many requests, please try again later".
*/
//Create a limiter
const limiter = rateLimit({
  limit: 5,
  windowMs: 60000,
  message: "Too many requests, please try again later",
  standardHeaders: true, //defaults to false
  legacyHeaders: false, //defaults to true
})

/** 
Challenge 2: 
* 1. Use the package docs to apply the rate limiter to the endpoint.
* 2. Keep the timestamp in the JSON response but change "requestCount" to a 
		 "remainingRequests" property.
* 3. Make this new property's value the number of remaining requests allowed 
     before the rate limiter kicks in. Use the optional chaining operator to 
     safely access this property.
*/



// Single endpoint with no protection
app.get('/api/data', limiter, (req, res) => {
  res.json({
    timestamp: new Date().toLocaleTimeString(),
    remainingRequests: req.rateLimit?.remaining ?? 'unknown',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});