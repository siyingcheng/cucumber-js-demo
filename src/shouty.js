class Person {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }
  moveTo(distance) {
    console.log(`${this.name} moved ${distance} meters.`);
  }

  shout(message) {
    console.log(`${this.name} shouted: ${message}`);
  }

  hear(distance, message) {
    if (distance <= 15) {
      this.messages.push(message);
    }
  }

  messageHeard() {
    return this.messages;
  }
}

module.exports = Person;
