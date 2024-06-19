const { Given, When, Then, Before } = require("@cucumber/cucumber");
const { assertThat, is, not } = require("hamjest");
const { Person, Network } = require("../../src/shouty");

Before(function () {
  this.network = new Network();
  this.people = {};
});

When("Sean shouts {string}", function (message) {
  this.people["Sean"].shout(message);
  this.messageFromSean = message;
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.people["Lucy"].messageHeard(), is([this.messageFromSean]));
});

Given("a person named {word}", function (name) {
  this.people[name] = new Person(this.network);
});
