# STRIDE Challenge 🕵️‍♀️

        .--.       .--.
    _  `    \     /    `  _
     `\.===. \.^./ .===./`
            \/`"`\/
         ,  |     |  ,
        / `\|`-.-'|/` \
       /    |  \  |    \
    .-' ,-'`|   ; |`'-, '-.
        |   |    \|   | 
        |   |    ;|   |
        |   \    //   |
        |    `._//'   |
       .'             `.
    _,'                 `,_

Time to think like a security tester!

Below are six QuickBite Potential Threats.  
For each one, write which STRIDE category it fits into, and why.

---

Potential Threat 1:
Thousands of fake orders slow the app to a crawl.
STRIDE: D, Denial of Service
Why: a flood of requests that overwhelms the server

---

Potential Threat 2:
A driver marks an order “delivered,” but later insists they didn’t.
STRIDE: R, Repudiation
Why: no audit trial to prove any action was taken

---

Potential Threat 3:
A driver discovers an admin dashboard link can see all the current orders.
STRIDE: E, elevation of privilege
Why: a lower-role user has gained admin access

---

Potential Threat 4:
A customer changes an order ID in the URL and views another person’s receipt.
STRIDE: S, Spoofing
Why:pretending to be another user

---

Potential Threat 5:
An error message prints the customer’s full address to the browser console.
STRIDE: D, Information Disclosure
Why: leak of private data

---

Potential Threat 6:
A customer edits their total price to $0.30 before checkout.
STRIDE: T, tampering
Why: data is modified before it is sent to the server

