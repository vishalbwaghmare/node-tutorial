// if want custome event form class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customeEmitter = new EventEmitter()

// on and emit method
// keep track of the order
// additional argument
// built-in modules utilize it

customeEmitter.on('response', (name, id)=>{
    console.log(`data received for user ${name} with ID ${id}`)
})

customeEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

customeEmitter.emit('response', 'vishal', 1)