1. backend security
    Security is not just about code, it's about how we think.
    thinking like an security-minded developer with STRIDE & OWASP

    Features?
    Does it run?
    Does it save?
    Does it render?

    Security
        How can this be broken into?

2. We will be studying
    STRIDE for design-time thinking
    OWASP Top 10 for runtime reality
    Comparing the two


    Think like an attacker
    Design like a defender

3. EX: QuickBite
    A development for a food delivery app 
    
    Customers
        browse menus
        place orders
        track deliveries
    
    Drivers
        Claim orders
        Deliver orders
        Mark orders as delivered

4. Framework called STRIDE
    was created at Microsoft to help teams 
    spot potential threats early in the design phase

    STRIDE is basically a check of 6 different ways an attacker might try to mess with your system

    Now the goal here isn't to get super technical 
    It's to start asking better questions

    We're still in design mode here, so we're not fixing anything yet.

    we're just learning to spot the cracks before they spread.

    So let's have a look at our QuickBite app through the lens of Stride'

    S: Spoofing (giả mạo)                           - Could someone pretend to be someone else?
        Ex: if a delivery driver figures out how to log in as another driver to steal their orders 
            a customer somehow places an order under a different account

    T: Tampering (làm giả mạo)                      - Could someone change data they shouln't?
        Changing or manipulating data on its way through through system
        Imagine a customer edits their order price in the browser before it's sent, changing a thirty dollar order to a three dollar order.
        If our app doesn't check that data on server, that change could slip through

    R: Repudiation (sự chối bỏ)                     - Could someone do something and deny it later?
        A restaurant marks an order as handed over to driver 
        but the customer says it never arrived, we have no delivery log or photo proof.
        There's no evidence either way, and that's a repudiation problem.

    I: Information Disclosure (công bố thông tin)   - Could private data leak out?
        Leaking secrets
        our error messages include customer's addresses or payment info.
        or we accidentially expose a full list of users in a public API.
        Even small leaks can be gold for attackers

    D: Denial of Service (từ chối dịch vụ)          - Could someone stop the app from working?
        At scale, distributed denial of service or DDoS 
        An this is when someone floods your system so real users can't get through
        A flood of fake orders can overwhelm the server, and the app will crawl or crash, and there's no food for anyone

    E: Elevation of Privilege (nâng cao đặc quyền)  - Could someone get powers they shouldn't have?
        This is when someone gets access that they shouldn't 
        Imagine a driver finds a hidden admin dashboard link, and can suddenly issue refunds or give themselves a huge tip

5.  Feature-based threat modelling
Because as developers, 
we dont usually start with a list of bad things 
we start with a list of features

The next step to become more security minded is to think of an extra question.
What could go wrong with this feature?

So we're gonna do exactly that with our student portal app from the first scrim

6. OWASP : Open Web Application Security Project 
is a global nonprofit of software 

    1. Broken Access Control:
        Users can access or change data they shouldn't
    2. Crytographic Failures: những sai sót trong mật mã
        Sensitive data isn't properly protected
    3. Injection
        Untrusted input is executed as code
    4. Insecure design
        The system was never designed with security in mind
    5. Security Misconfiguration
        Default passwords, open admin panels, exposed debug info.
    6. Vulnerable & outdated components
        Using libraries or frameworks with known exploits
    7. Identification & authentication failures
        Weak login, token reuse, or session handling flaws
    8. Software & data integrity failures
        The app trusts unverified updates or plugins
    9. Security Logging & Monitoring Failures
        Breachs go unnoticed or untraceable
    10. Server-Side request Forgery (SSRF)
        The server is tricked into fetching something on behalf of an attacker.

7. STRIDE       - Design phase 
    - What could go wrong?          
    - Build with security
    - How do we prevent it?


    OWASP       - Runtime phase 
    - what actually went wrong?    
    - Defend and respond
    - How do we prevent it again?


    Design    ->     Build    ->     Launch     ->    Maintain
            STRIDE                           OWASP  

    QuickBite   
    STRIDE: Spoofing or Tampering
    OWASP:  Broken Access Control

    STRIDE: Elevation of Privilege
    OWASP: Broken Access Control

8. We will be studying
    What rate limiting is
    Core Concepts
        rate limiting & throttling
        client identification
        time windows
    Common algorithms
        fixed window counter
        sliding window log/counter
        token bucket
        leaky bucket
    Throttling

9. Rate Limiting
    Fair Use: Helps organizations to ensure fair use of their APIs, 
            avoiding resource hogging by single clients.
    
    Security: preventing brute-force attacks (ex login attemps) 
            mitigating denial-of-service (DoS) attacks
            sophisticated DDoS attacks often use distributed sources, making per IP rate limiting less effective. So this can require additional mitigation strategies like geographic filtering, behavioral analysis, or upstream protection services.
            
    Resources: Help protect resources by preventing overload which can cause them to slow down or become unavailable.

10. Core concepts:
    Rate limiting: like a hard cap on requests per time period, whereas throttling is slowing down responses when the limit approaches, 

    Client identification: 
        Ip address
        UserId
        API keys
        JWT claims
    Time windows
    So there are a few different types of rate limiting 
    IP based is commonly used to prevent DDoS attacks.
    Server based rate limiting is preventing resource exhaustion and ensuring fair use of server resources.
    And then geographical based is preventing attacks from specific regions, such as those where, like, a large number of malicious requests might originate.
    When we're talking about rate limiting, we want to think about differentiating between user level limits and system wide limits. 

    And time windows can be per second, per minute or per hour
    Do we want a certain number of requests in 30 seconds, or one minute?
    
