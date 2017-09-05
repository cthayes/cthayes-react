var Express = require('express');

const app = Express()
const port = 3000

//Serve static files
var static = Express.static('dist');
app.use('/', static)
app.use('/education', static)
app.use('/experience', static)


app.listen(port)

console.log('Listening on port 3000')