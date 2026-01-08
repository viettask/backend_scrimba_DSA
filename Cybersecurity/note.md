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

    S: Spoofing                     - Could someone pretend to be someone else?
    T: Tampering                    - Could someone change data they shouln't?
    R: Repudiation         - Could someone do something and deny it later?
    I: Information Disclosure