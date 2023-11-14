const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let enzo = new Person('enzo');

let samantha = new Person('samantha');
samantha.on('name', () => {
    console.log('my name is '+ samantha.name);
});

enzo.on('name', () =>{
    console.log('my name is ' + enzo.name)
});

enzo.emit('name');

samantha.emit('name');
// my name is samantha