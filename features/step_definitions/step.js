const { Given, When, Then } = require("@cucumber/cucumber");
const { assertThat, is, not } = require("hamjest");
const Person = require("../../src/shouty");

Given("Lucy is located/standing {int} meters from Sean", function (distance) {
  this.lucy = new Person("Lucy");
  this.sean = new Person("Sean");
  this.distance = distance;
  this.lucy.moveTo(distance);
});

When("Sean shouts {string}", function (message) {
  this.sean.shout(message);
  this.message = message;
  this.lucy.hear(this.distance, message);
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.lucy.messageHeard(), is([this.message]));
});

Then("Lucy does not hear Sean's message", function () {
  assertThat(this.lucy.messageHeard(), not(this.message));
});
