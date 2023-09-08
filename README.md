### Golden Tip:  __Dont doing things is faster than doing things__
### silver Tip:  __Doing things later is faster than doing it right now__

# Javascript-Performance
## TypeScript

 - consider using typescript or flow.
 - in an app running in v8 engine when you defined a function without strict type parameters your performance gone go down.
 - always pass a type with your functions.

# Rendering-Performance
## Reflow || Layout Trashing

- is happening when your are reading and changing DOM without let it to paint.
- like a for loop changing a DOM property in every iteration.
- to avoid you have to maniupulate the DOM in 2 steps.
- 1 calculate sequence changes an keep it in memory,
- 2 passing all changes to the DOM in once.
- this means lower DOM interacting with our JS Code.
- you can use library called Fast-Dom for it.


## Steps of Showing a Web Page

 - create DOM from html file.
 - create CSSOM from css file.
 - merge DOM & CSSOM and create Render Tree. (render tree dont have hidden elements).
 - Layouting and measurments.
 - Painting and craete images.

## Render Piple Line
 - js -> style -> layout -> paint -> composite.
 - this is not happening every time.

## Tip 0:
 - use simple class names to calculate css.
 - using pesudo elements and calculating in css in more work to do and takes longer.(performance cause)


## Tip 1:
 - any change to css will trigger paint except changeing opacity or transform.
 - if changing simple things like color your not reflow just repaint.

## Tip 2: Will-Change in CSS
 - usually using for janky animations.
 - scolling is one the paint causes.
 - if you have sticky header your probeblay repaint it with scrolling.
 - beacuse they are in the same layout.( there other reasons causing to trigger repaint.)
 - you dont have access to layouting apis to manage those but you can hint them.
 - with will-change property in css.
   - 1 to craete a seperate layout for element that you dont want to repaint.(like sticky header on scrolling).
   - 2 you have to put back will-change to 'auto'.
 - you can check repainting in devtools -> rendering -> paint flashing


# Load-Performance

## Cache
 - service worker: your proxy to other worlds.
 - can controll an implement diffrent cache startegies.
    - 1 read from local then check the server.
    - 2 read from server then add to cache use it in offline mode.
## Lazy Loding - Code Splitting
## Analayze bundle size with webpack BundleAnalayzerPlugin (visualize bundles)
## if you are using library import functionality from them with named export
and not all of that like :  (import { transform } from 'loasdash') (this will reduce bundle size)
use dynamic import components with react-loadable which (load it once and use copy then)
you can preload next component with react loadable and import()
preferd each bundle size is under 300 kilobytes
