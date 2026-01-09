1. Client identification
    1. Fairness
    2. Effectiveness
    3. User experience
    4. Security

2. IP address
    Pros:
        No authentication required
        Works for anonymous users
        Simple to implement
        Can't be easily changed by normal users
    
    Cons:
        Shared IPs
        Dynamic IPs
        IPv6 complications
    
    Best for:
        Public endpoints with no authentication
        DDos protection
        Basic abuse prevention

2. User ID (authenticated)
    Pros:
        Accurate
        Fair
        Portable
        Enforceable 

    Cons
        Requires authentication system
        Doesn't protect unauthenticated endpoints
        Wont catch abuse before account creation

    Best for
        Authenticated API endpoints
        User-specific quotas
        SaaS applications with tiered pricing
        Per-user features limits

3. API Key
    Pros:
        Ties to a specific application/integration
        Can have different tiers
        revocable if abused
        easy to track usage

    Cons:
        Keys can be shared or leaked
        doesn't identify end users
        requires key management infrashtructure
    
    BEst for
        Third-party API integrations
        B2B APIs
        Tiered services plans
        