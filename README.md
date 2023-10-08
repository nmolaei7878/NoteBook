### Golden Tip:  __Dont doing things is faster than doing things__
### Silver Tip:  __Doing things later is faster than doing it right now__

# Javascript-Performance
## TypeScript

 - consider using ```typescript``` or ```flow```.
 - in an app running in v8 engine when you defined a ```function``` without strict type parameters your performance gone go down.
 - always pass a type with your ```functions```.

# Rendering-Performance
## Reflow || Layout Trashing

- is happening when your are reading and changing DOM without let it to paint.
- like a ```for loop``` changing a DOM property in every iteration.
- to avoid you have to maniupulate the DOM in 2 steps.
- 1 calculate sequence changes an keep it in memory,
- 2 passing all changes to the DOM in once.
- this means lower DOM interacting with our JS Code.
- you can use library called ```Fast-Dom``` for it.


## Steps of Showing a Web Page

 - create ```DOM``` from html file.
 - create ```CSSOM``` from css file.
 - merge DOM & CSSOM and create ```Render Tree```. (render tree dont have hidden elements).
 - ```Layouting``` and measurments.
 - ```Painting``` and create images.

## Render Piple Line
 - js -> style -> layout -> paint -> composite.
 - this is not happening every time.

## Tip 0:
 - use simple __class names__ to calculate __css__.
 - using __pesudo elements__ and calculating in the __css__ is more work to do and takes longer.(performance cause)


## Tip 1:
 - any change to __css__ will trigger __paint__ except changeing ```opacity``` or ```transform```.
 - if changing simple things like ```'color'``` your not __reflow__ just __repaint__.

## Tip 2: Will-Change in CSS
 - usually using for janky animations.
 - scolling is one the paint causes.
 - if you have sticky header your probablay repaint it with scrolling.
 - beacuse they are in the same layout.( there other reasons causing to trigger repaint.)
 - you dont have access to layouting apis to manage those but you can hint them.
 - with ```will-change``` property in __css__.
   - 1 to craete a seperate layout for element that you dont want to repaint.(like sticky header on scrolling).
   - 2 you have to put back will-change to ```'auto'```.
 - you can check repainting in devtools -> rendering -> paint flashing


# Load-Performance

  __Cache__ (```service worker```) : your proxy to other worlds.
  - can controll an implement diffrent cache startegies.
     - 1 read from local then check the server.
     - 2 read from server then add to cache use it in offline mode.
  ---  
 - ```lazy loding``` & ```code splitting``` ( both routes and components ) using ```Suspense```.
 - ```preload components``` you will need after something.
 - analayze bundle size with webpack ```BundleAnalayzerPlugin``` (visualize bundles)
 - if you are using library import functionality from them with ```named export```
 - and not all of that like :  ```import { transform } from 'loasdash'``` (this will reduce bundle size)
 - preferd each bundle size is under ```300``` kilobytes

### Resource Hint

####Preconnect`

The `preconnect` directive allows the browser to **setup early connections before an HTTP request is actually sent to the server**. This includes DNS lookups, TLS negotiations, TCP handshakes. This in turn eliminates roundtrip latency and saves time for users.

#### Prerendering

 is very similar to prefetching in that it gathers resources that the user may navigate to next. The difference is that prerendering actually **renders the entire page in the background**, all the assets of a document. Below is an example.

#### prefetch

 is a low priority resource hint that allows the browser to **fetch resources in the background** (idle time) that might be needed later, and **store them in the browser's cache**. Once a page has finished loading it begins downloading additional resources and if a user then clicks on a prefetched link, it will load the content instantly. There are three different types of prefetching, link, DNS, and prerendering which we will go into more below.


#### preload

Generally it is best to `preload` your most important resources such as images, CSS, JavaScript, and font files. This is not to be confused with browser preloading in which only resources declared in HTML are preloaded. The `preload` directive actually overcomes this limitation and **allows resources which are initiated via CSS and JavaScript to be preloaded and define when each resource should be applied**.

`preload` is different from `prefetch` in that it focuses on fetching a resource for the current navigation. `prefetch` focuses on fetching a resource for the next navigation. It is also important to note that `preload` does not block the window's `onload` event.