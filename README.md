# Core Web Vital

### LCP

- how much it take to see biggest content on your website
- most of the time its about big images.
- with minimize and optimize images, code Spliting, Prefetch, Preload we can get a good number in `Largest Contentful Paint`.

### CLS

- wanted or un-wanted layout shifts.
- for example user load our website, see a paragraph and start to reading it, then our hero image will load on top of paragraph, and Layout Shift happens, user will gone the paragraph and now see an image,
- with place holders and pre-defined sizes we can reduce `Cumulative Layout Shift`.

### FID

- how much it take for our website to be interactive to our users.
- this will happen in React.js or client side rendering fast
- on the other hand this will take more time on SSR/SSG like Next.js beacuse of hydration.
- minimize and optimize js will `increace First Input Delay`.
