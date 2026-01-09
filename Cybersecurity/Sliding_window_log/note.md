Instead of the window existing and resetting
regardless of traffic like in the fixed window counter
This window is being calculated dynamically when each request arrives, 

In sliding window log, the system looks back a certain length of time, the window length, and counts how many successful request, 
have occurred in that time range, 

it then decides whether to allow or reject the current request on that calculation.

We're therefore gonna have to store time stamps for each request so the system knows exactly when each successful request arrived.

It's more accurate than the fixed window counter since 
there's no boundary issue, 
but it's more memory intensive 
It's called sliding window log because as requests arrive on a timeline, 
