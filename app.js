// npm - global command, comes with node
//npm --version

//local dependency - use it only in this perticulat project
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// manual approach (create package.json in root, create properties etc)
// npm inint (step ny step, press enter to skip)
// npm inint -y (everything default)

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(item)

console.log(newItems) // [1, 2, 3, 4]
