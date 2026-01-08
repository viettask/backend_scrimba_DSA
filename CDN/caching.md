What "Caching" means
    keep a copy at the edge (near users)
    serve the copy while it's fresh
    when it's stale, validate or replace it

What to Cache (and Not)
    Static files: images, CSS, Js
    Public GET data/pages (docs, news, product lists)
    Personalised pages (carts, dashboards, account)

Fresh vs Stale
    Fresh serve instantly (within TTL)
    aging - do a quick validation check
    fallback - serve last good copy
    your controls - set TTL and refresh on change

Why Caching matters
    latency (down)
    origin load (down)
    bandwidth cost (down)
    resilience (up)
    user hapiness (up)