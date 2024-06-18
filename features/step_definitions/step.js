const { Given, When, Then } = require("@cucumber/cucumber");

Given("Lucy is located {int} meters from Sean", function (distance) {
  console.log("distance:", distance);
  return "pass";
});

When("Sean shouts {string}", function (shouts) {
  console.log("shouts:", shouts);
  return "pending";
});

Then("Lucy hears Sean's message", function () {
  return "pending";
});
