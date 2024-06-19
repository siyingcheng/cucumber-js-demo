const { Given, When, Then, Before } = require("@cucumber/cucumber");
const { assertThat, is, not, contains } = require("hamjest");
const { Person, Network } = require("../../src/shouty");
const assert = require("assert");

const default_range = 100;

Before(function () {
  this.network = new Network(default_range);
  this.people = {};
});

When("Sean shouts {string}", function (message) {
  this.people["Sean"].shout(message);
  this.messageFromSean = message;
});

When("Sean shouts", function () {
  let message = "Hello, world!";
  this.people["Sean"].shout(message);
  this.messageFromSean = message;
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.people["Lucy"].messageHeard(), is([this.messageFromSean]));
});

Then("Lucy should hear a shout", function () {
  assertThat(this.people["Lucy"].messageHeard().length, is(1));
});

Given("a person named {word}", function (name) {
  this.people[name] = new Person(this.network, 0);
});

Given("a person named {word} is located at {int}", function (name, location) {
  this.people[name] = new Person(this.network, location);
});

Given("the range is {int}", function (range) {
  this.network = new Network(range);
});

Then("Larry should not hear a shout", function () {
  assertThat(
    this.people["Larry"].messageHeard(),
    not(contains([this.messageFromSean]))
  );
});

Given("people are located at", function (dataTable) {
  dataTable.hashes().map((person) => {
    this.people[person.name] = new Person(this.network, person.location);
  });
});

Then("Lucy hears the following messages:", function (expectedMessages) {
  let actualMessages = this.people["Lucy"]
    .messageHeard()
    .map((message) => [message]);
  assert.deepEqual(actualMessages, expectedMessages.raw());
});
