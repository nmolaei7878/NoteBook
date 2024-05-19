## Integration Model

#### Build-Time Integration
- develope your code (A) and share it on a registry like `npm`.
- install it as dependecny on your (B) project and use it.

> __Downsides__ every time project (B) got an update, project (A) have to get those updates and re-deploy.

#### Run-Time Integration

- develope project (A) and put it on server, and get a url like `https://domain/static/bundle.js`
- load and use on (B) project, using `Module Federation`
