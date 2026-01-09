#!/usr/bin/env node
/**
 * Token Bucket Algorithm Game
 * An interactive educational tool to understand rate limiting
 */

import readline from 'readline';

// Token Bucket rate limiting algorithm implementation
class TokenBucket {
  constructor(capacity, refillRate, refillInterval) {
    //instance properties:
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.refillInterval = refillInterval; // How often (in seconds) to refill
    this.tokens = capacity; //Start with full bucket
    this.secondsSinceLastRefill = 0;
  }

    /** 
  Challenge: Complete the TokenBucket constructor
  * 1. Create a "tokens" property that starts with the full capacity.
  * 2. Create a "secondsSinceLastRefill" property that starts at 0.
  */

  // instance method
  processRequests(numRequests) {
    // Each round = 1 second
    this.secondsSinceLastRefill += 1;

   // Check if it's time to refill
   if (this.secondsSinceLastRefill >= this.refillInterval) {
    //REFILL! (tokens can't exceed bucket capacity)
    this.tokens = Math.min(this.capacity, this.tokens + this.refillRate);
    this.secondsSinceLastRefill = 0;
   }

    // Process requests
    /** 
    Challenge: Determine how many requests to accept/reject
    * 1. Define a variable "accepted" as the minimum of (requests made, tokens 
        available).
    * 2. Define a variable "rejected" as the remaining requests that were not 
        accepted.
    */


    // Process requests
    const accepted = Math.min(numRequests, this.tokens);
    const rejected = numRequests - accepted;

    // Consume tokens
    this.tokens -= accepted;

    //return number of accepted/rejected requests
    return { accepted, rejected };
  }

  getTokens() {
    return this.tokens;
  }

  getSecondsUntilNextRefill() {
    return this.refillInterval - this.secondsSinceLastRefill;
  }
}

function printSeparator() {
  console.log('='.repeat(60));
}

function printGameIntro(capacity, refillRate, refillInterval) {
  printSeparator();
  console.log('🪣  WELCOME TO THE TOKEN BUCKET GAME  🪣');
  printSeparator();
  console.log(
    '\nThis game demonstrates the Token Bucket rate limiting algorithm.'
  );
  console.log('\n📋 RULES:');
  console.log(`  • Bucket capacity: ${capacity} tokens`);
  console.log(`  • Refill amount: ${refillRate} tokens`);
  console.log(`  • Refill interval: Every ${refillInterval} second(s)`);
  console.log(`  • Each round: 1 second passes`);
  console.log(`  • Starting tokens: ${capacity} (bucket starts full)`);
  console.log('\n💡 HOW IT WORKS:');
  console.log('  1. Enter the number of requests you want to make');
  console.log('  2. The bucket will accept requests if it has enough tokens');
  console.log('  3. Each accepted request consumes 1 token');
  console.log(
    `  4. Tokens refill every ${refillInterval} seconds (but never exceed capacity)`
  );
  console.log('\n⌨️  COMMANDS:');
  console.log('  • Enter a number to make that many requests');
  console.log("  • Type 'quit' or 'exit' to end the game");
  console.log("  • Type 'reset' to restart the game");
  printSeparator();
  console.log();
}

function printRoundResult(
  roundNum,
  numRequests,
  accepted,
  rejected,
  tokensRemaining,
  secondsUntilRefill,
  refilled
) {
  console.log(`\n📊 Round ${roundNum} Results:`);
  if (refilled) {
    console.log(
      `  🔄 Bucket refilled. Now has ${tokensRemaining + accepted} tokens!`
    );
  }
  console.log(`  Requests made:       ${numRequests}`);
  console.log(`  ✅ Accepted:         ${accepted}`);
  console.log(`  ❌ Rejected:         ${rejected}`);
  console.log(`  🪙 Tokens remaining: ${tokensRemaining}`);
  console.log(`  ⏱️  Next refill in:   ${secondsUntilRefill} second(s)`);
  console.log();
}

// Default values are used if no arguments are provided
function playGame(capacity = 5, refillRate = 3, refillInterval = 5) {
  let bucket = new TokenBucket(capacity, refillRate, refillInterval);
  let roundNum = 0;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  printGameIntro(capacity, refillRate, refillInterval);

  const askQuestion = () => {
    rl.question('How many requests do you want to make? ', (answer) => {
      const userInput = answer.trim().toLowerCase();

      // Handle special commands
      if (['quit', 'exit', 'q'].includes(userInput)) {
        console.log(
          '\n👋 Thanks for playing! Hope you learned about token buckets!'
        );
        printSeparator();
        rl.close();
        return;
      }

      if (userInput === 'reset') {
        console.log('\n🔄 Resetting game...');
        bucket = new TokenBucket(capacity, refillRate, refillInterval);
        roundNum = 0;
        printGameIntro(capacity, refillRate, refillInterval);
        askQuestion();
        return;
      }

      // Validate input
      const numRequests = parseInt(userInput, 10);
      if (isNaN(numRequests) || numRequests < 0) {
        console.log(
          "❗ Please enter a valid positive number (or 'quit' to exit)."
        );
        askQuestion();
        return;
      }

      // Process the requests (each round = 1 second)
      roundNum++;
      const tokensBefore = bucket.getTokens();
      const { accepted, rejected } = bucket.processRequests(numRequests);
      const tokensAfter = bucket.getTokens();
      const refilled = tokensAfter > tokensBefore - accepted;
      const secondsUntilRefill = bucket.getSecondsUntilNextRefill();

      printRoundResult(
        roundNum,
        numRequests,
        accepted,
        rejected,
        tokensAfter,
        secondsUntilRefill,
        refilled
      );

      // Continue the game
      askQuestion();
    });
  };

  askQuestion();
}

/** 
Challenge: 
* 1. Run the game and play a few rounds. 
* 2. Modify the game parameters so the bucket has a capacity of 8 tokens and 
     refills 2 tokens every 10 seconds.
* 3. Before running the game again, predict the behaviour in 2 sentences below.
* 4. Run the game to check if your prediction is correct.
*
* Prediction
* 
*/

function main() {
  const CAPACITY = 10;
  const REFILL_RATE = 6;
  const REFILL_INTERVAL = 3; // How often (in seconds) tokens refill

  playGame(CAPACITY, REFILL_RATE, REFILL_INTERVAL);
}

main();