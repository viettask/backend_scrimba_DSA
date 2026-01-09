1. Common algorithms:
    Fixed window counter
    Sliding window log
    Sliding window counter
    Token bucket
    Leaky bucket

2. The first rate limiting algorithm we're looking at is the fixed window counter.
This is when the system counts requests in a specific window length.

And if this count reaches a set limit, it will start rejecting requests.
So it's quite a simple algorthm.

The count resets at the end of the window, and you'll see in this example, I give you that the state management required is quite simple
because you just need to keep track of the count and the timer.

