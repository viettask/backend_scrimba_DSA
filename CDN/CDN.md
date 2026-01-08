1. Origin server 
    the cons
        High latency
        Origin overload
        Bandwidth & egress costs
        Availability & resiliency
        Asset bload -> slow pages
        security at the edge
        budget alerts <> hard limits
    drawbacks & gotchas
        personalization & Auth can kill caching

2. CDN
    You use a CDN
    your websites' files like images, videos, or HTML pages arent just stored on one main computer, origin server
    They're copied and cached to many edge server around the world

    How a CDN works
    1. DNS -> CDN
    2. Edge cache check (HIT or MISS)
    3. MISS -> fetch form orign, then save
    4. While fresh -> serve from cache (fast)
    5. When old -> quick freshness check (revalidate)
    6. If origin slow/down -> serve last good copy
    7. You control this with headers & updates

3. Popular CDNs to consider 
        1. Cloudfare is one CDN that has very generous free tier 
        2. AWS CloudFront
        3. Netlify Edge

    Free Wins (Automatically)
        Global CDN in front of your origin
        Automatic caching of static assets
        Free SSL certificate at the edge (Universal SSL)
        Always-on DDoS protection
        automatic compression of text assets