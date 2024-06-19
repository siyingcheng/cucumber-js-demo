class Person {
  constructor(network, location) {
    this.messages = [];
    this.network = network;
    this.location = location;
    this.network.subscribe(this);
  }

  shout(message) {
    this.network.broadcast(message, this.location);
  }

  hear(message) {
    this.messages.push(message);
  }

  messageHeard() {
    return this.messages;
  }
}

class Network {
  constructor(range) {
    this.subscribers = [];
    this.range = range;
  }

  broadcast(message, shouter_location) {
    this.subscribers.forEach((subscriber) => {
      let withinRange =
        Math.abs(shouter_location - subscriber.location) <= this.range;
      let shortEnough = message.length <= 180;
      if (withinRange && shortEnough) {
        subscriber.hear(message);
      }
    });
  }

  subscribe(person) {
    this.subscribers.push(person);
  }
}

module.exports = {
  Person: Person,
  Network: Network,
};
