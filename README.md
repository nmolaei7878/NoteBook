
# Web Wokrker
- is special kind of service worker to do heavy lifiting jobs in the background, in its own seperate thread.
- its a js file running on its own thread dedicated to the tab that user opend,
  - you can have a `shared worker` which is a thread that run worker and shared it with multiple tabs of your web page.
> with closing tab __web worker__ get destroyed , but __service worker__ still alive.

## creating a web-worker
```javascript
var worker = new Worker('path to your worker file')
worker.addEventListener('message, function onMessage(event) {
  console.log(event.data)
  })
```

  > Data Tranfer between __worker thread__ and your __main thread__ is by copying even though your using refrence types.  
## communication with web-worker
#### from main thread to worker thread
```javascript
  worker.postMessage('hello from main')
```
#### from worker thread to main thread

```javascript
self.onmessage = function onMessage(){
  worker.postMessage('hello from worker')
}
```
#### stop web-worker
```javascript
wokrer.terminate()
```
# Service Worker
> the key thing to keep i mind is in web apps we are dealing with 2 servers. first one is the server or cdn that serve our static content like image/css/js and others, the second one is api server that we get data from it. 

- all the network request will funnel thorough service worker.
- a type of JavaScript file that is run in the background by the browser
- it is a proxy for your web app network.
- able to intercept network requests, cache or retrieve resources from the cache
> if you are request an image from another server that server had to enable `cors`.
> By default, service worker will not intercept or cache any cross-origin traffic, like HTTP API requests or images loaded from a different domain.

> a good resource www.serviceworker.rs

#### Feature Check SW
```javascript
 var usingSW = ("serviceWorker" in navigator)
```

#### Register SW

> a service worker controlling a page can still intercept any network requests, including those for cross-origin assets. Scope limits which pages are controlled by a service worker, not which requests it can intercept

- if you pass your path like "/js/sw.js", service worker just handle the requests for "/js" underneath path.

- if you want to sw will handle all your requests, you should put it in root of your project.

#### 3 LifeCycle Of SW
> if you change your sw even with a code comment, browser will think it is a new service worker
- __installing__ : first time browser see a service-worker or an updated sw.
- __waiting__: an old service worker exsist, your new one has to wait, until a user start navigaton event, then old one die and new one comes into play.
- __active__: your sw is ready to use.
> you can only have 1 instance of sw at given time.  


##### client code
```javascript
var swReges = await navigator.serviceWoker.register("/sw.js",{})

var SWState = swReges.installing | swReges.waiting | swReges.active;

navigator.serviceWorker.addEventListener("controllerchange",function(){
})
```
> `controllerchange` event means a new sw take controll of the page.

##### sw code
```javascript
const version = 1
self.addEventListener('install', function onInstall(event){})
self.addEventListener('activate', function onActivate(event){})
```
##### skipWainting()
> you can skip waiting phase using `self.skipWaiting()` on __install event__, or ask the user to refresh the page or show a pop to user and refresh the pageyour self.

##### waitUntil()
> after browser run your sw code it will shut down your sw, the way you tell the browser as strong request is `event.waitUntil()` in `activate` phase which recives a promise, for example if user open your website and leave it right a way you dont want cache thing partially, with this your asking browser to give you a time to do your work in the background. 

##### client.claim()
> if you use `skipWaiting` and there are 3 open tabs of your website and user open a new tab with new sw, it doesnt mean we killed the old sw right a way, we have to tell to those 3 tabs a new service worker controlls you now, with adding `await clinets.claim()` in `activate phase`.


#### Communication To SW
- some reason to talk with sw
> sw dont have access to localstorage or cokies
> you can use `navigator.isonLine` in service work, but not the `eventListner` offline , online
- recive from sw
```javascript
navigator.serviceWorker.addEventListener("message",(mssage)=>{})
```
- send to sw
```javascript
  navigator.serviceWorker.controller.postMessage(msg)
```
#### Caching 
- generally you cache your static file from the server on request.
- also you can preload all of it to get better experience for user, since the service worker run in the background, `next-pwa` is doing that.

```javascript
var cache = 'my-chache-name-${version}'

var urlsToCache = [
  '/',
  '/styles/smestyle.css',
  '/image/img1.png',
  '/js/jsfile.js'
]
```

#### Updating SW
>This can happen in single page applications where navigation requests are rare, since the application typically encounters one navigation request at the start of the application's lifecycle. In such situations, a manual update can be triggered on the main thread
```javascript
navigator.serviceWorker.ready.then((registration) => {
  registration.update();
});
```








