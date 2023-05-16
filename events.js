// Node.js uses events to handle program actions. The EventEmitter class is an essential part of the event-driven architecture and inherits from the Node.js core's event module. It provides methods like addListener(), once(), removeListener(), and removeAllListeners() for managing event listeners. The class allows developers to create custom events that are specific to their application's needs, making it more flexible. The EventEmitter class is a crucial tool for building reactive applications.

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Using the once method, for one time use 
emitter.once("myEvent", (data) => {
    console.log("Event has ocurred:", data);
});
  
  emitter.emit("myEvent", "This is the event data!"); // this will trigger the listener
  emitter.emit("myEvent", "This is not the event data."); // this will not trigger the listener

// Using removeAllListeners(); to remove the first event 

emitter.on("event1", (data) => {
    console.log("First event has ocurred:", data);
  });

emitter.on("event2", (data) => {
    console.log("Second event has ocurred:", data);
  });
  
  emitter.emit("event1", "This is event 1!"); // this will trigger the first listener
  emitter.emit("event2", "This is event 2!"); // this will trigger the second listener

// Removing listeners
  emitter.removeAllListeners("event1");
  
  emitter.emit("event1", "This is event 1!"); // this will not trigger any listeners
  emitter.emit("event2", "This is event 2!"); // this will trigger the second listener

