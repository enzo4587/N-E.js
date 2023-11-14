const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () =>{
   console.log('tutorial event has occured.');
});

eventEmitter.emit('tutorial');

eventEmitter.on('product',(num1, num2) => {
    console.log(num1 * num2);
});

eventEmitter.emit('product', 5,5);