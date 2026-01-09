1. express-rate-limit

Middleware between request and endpoint
Counts requests if exceed set limit
blocks requests if exceed set limit
like a club bouncer

2. Headers vs JSON
Headers are metadata (system information about the communication)
    Rate limit
    Content type
    Status codes
JSON is for application data

3. Rate Limit Headers
    Standard practice
    Always available
    easy to read

Old                         New
X-RateLimit-Limit           ratelimit-limit
X-RateLimit-Remaining       ratelimit-remaining
X-RateLimit-Reset           ratelimit-reset

