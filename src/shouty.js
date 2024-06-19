class Person {
  constructor(network) {
    this.messages = [];
    this.network = network;
    this.network.subscribe(this);
  }

  shout(message) {
    this.network.broadcast(message);
  }

  hear(message) {
    this.messages.push(message);
  }

  messageHeard() {
    return this.messages;
  }
}

class Network {
  constructor() {
    this.subscribers = [];
  }

  broadcast(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.hear(message);
    });
  }

  subscribe(person) {
    this.subscribers.push(person);
  }
}

module.exports = { Person, Network };
