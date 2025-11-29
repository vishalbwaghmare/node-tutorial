const {createReadSteam} = require('fs')

const stream = createReadSteam('./content/big.txt');

stream.on('data', (result) =>{
    console.log(result)
})