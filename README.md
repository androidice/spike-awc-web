This is to present a project structure for awc team, 
the details of this structure is explained below,
This structure also follows best practices from [http://glc.istackmanila.com/istackmanila/react-boilerplate-teamguide](http://glc.istackmanila.com/istackmanila/react-boilerplate-teamguide)

```js
app
...components // components folder will compose of all reusable components
.....MainNav // reusable component
.......tests
.......index.js
...containers// containers
.....App  // app container
.......tests
.......actions
.......constants
.......index.js
.......reducer.js
.......selector.js // app selector
.....HomePage // an example container
.......tests
.......actions
.......constants
.......index.js
.......reducer.js
.......sagas.js
.......selector.js // homePage selector
...translation// contains language transistions
...utils// contains utilities like request
...app.js
...index.htmll
...reducers.js //root reducer
...routes.js// contains routes
...store.js// store configuration
node_modules// will contain node modules
server
.env.local// environment setup for local
.env.production// environment setup for production
.env.staging// environment setup for staging
package.json
README.md
```
