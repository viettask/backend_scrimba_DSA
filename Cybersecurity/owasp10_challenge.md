# OWASP Bug Triage 🔍

         _
        /_/_      .'''.
     =O(_)))) ...'     `.
        \_\              `.    .'''
                           `..'

Example:
Customer passwords are being stored in plain text in the database.
OWASP Top 10: Cryptographic Failures
Fix: Scramble or hash passwords before storing so they can’t be read directly. 


---

Restaurant uploaded a file called menu.js instead of an image, and it actually ran when someone opened it through the CDN.
OWASP Top 10: Security Misconfiguration
Fix: Only allow real image files and store them somewhere the system can’t execute them.

Driver changed the order ID in the URL and could see another customer’s order details.
OWASP Top 10: Broken Access Control
Fix: Make sure the backend checks that users can only see their own orders.

Any logged-in user can open /admin/orders and see restaurant dashboards.
OWASP Top 10: Broken Access Control
Fix: Let only admin accounts access admin pages; block everyone else.

Payment webhooks are coming in with fake “paid” statuses because we’re not verifying where the request is coming from.
OWASP Top 10: Software and Data Integrity Failures
Fix: Double-check that payment messages really come from the payment provider before trusting them.

Login form is still using plain HTTP — credentials show up in clear text in the network tab.
OWASP Top 10: Cryptographic Failures
Fix: Use HTTPS for all login pages so passwords can’t be seen in transit.

Logs are printing full card numbers and addresses whenever a payment fails.
OWASP Top 10: Security Logging and Monitoring Failures 
Fix: Avoid logging private details; blur or hide sensitive info in logs.

---

Need a refresher? Check out `owasp10_reference.md`!