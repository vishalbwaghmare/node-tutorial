const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello world')
})

server.listen(3000, ()=>{
    console.log(`Server is running on port : 3000`)
})