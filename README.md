
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
- all the network request will funnel thorough service worker.

- it is a proxy for your web app network.

> if you are request an image from another server that server had to enable `cors`.

> a good resource www.serviceworker.rs

#### Feature Check SW
```javascript
 var usingSW = ("serviceWorker" in navigator)
```

#### Register SW

- if you pass your path like "/js/sw.js", service worker just handle the requests for "/js" underneath path.

- if you want to sw will handle all your requests, you should put it in root of your project.

#### 3 LifeCycle Of SW
> if you change your sw even with a code comment, browser will think it is a new service worker
- __installing__ : first time browser see a service-worker or an updated sw.
- __waiting__: an old service worker exsist, your new one has to wait, until a user start navigaton event, then old one die and new one comes into play.
- __active__: your sw is ready to use.

> you can only have 1 instance of sw at given time.  

```javascript
var swReges = await navigator.serviceWoker.register("/sw.js",{})

var SWState = swReges.installing | swReges.waiting | swReges.active;

navigator.serviceWorker.addEventListener("controllerchange",function(){
})
```
> `controllerchange` event means a new sw take controll of the page.













