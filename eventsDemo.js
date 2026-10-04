import { EventEmitter } from 'events';

const emitter = new EventEmitter();
// event emitter is created using the EventEmitter class from the 'events' module. This allows for the creation of custom events and the ability to listen for and respond to those events.

function greeting(name) {
  console.log("hello", name);

}
function goodbye(name) {
  console.log("goodbye", name);
}
// The EventEmitter class from the 'events' module is used to create an event-driven architecture in Node.js. An instance of EventEmitter is created, and two functions, greeting() and goodbye(), are defined to handle specific events. The greeting() function logs a greeting message with the provided name, while the goodbye() function logs a farewell message with the provided name.
emitter.on('greet', greeting);
emitter.on('goodbye', goodbye);
// The on() method of the EventEmitter class is used to register event listeners for a specific event. In this case, two listeners are registered for the 'goodbye' event: the greeting() function and the goodbye() function. When the 'goodbye' event is emitted, both functions will be called in the order they were registered.

emitter.emit('greet','awesmatic');
emitter.emit('goodbye','awesmatic');
// The emit() method of the EventEmitter class is used to trigger an event and call all registered listeners for that event. In this case, the 'goodbye' event is emitted with the argument 'goodbye', which will be passed to both the greeting() and goodbye() functions when they are called. As a result, both functions will log their respective messages to the console.

emitter.on('error', (err) => {
  console.error('An error occurred:', err);
});
emitter.emit('error', new Error('Something went wrong!'));
