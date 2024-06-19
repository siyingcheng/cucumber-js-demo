Feature: shouts
  Shouty allows user to "hear" other users "shouts" as long as they are close enough to each other.

  To do:
    - only shout to people withn a certain distance

  Background:
    Given a person named Lucy
    And a person named Sean

  Rule: Shouts can be heard by other users

    Scenario: Listener is whitin range
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean's message

    Scenario: Listener is heard another message
      When Sean shouts "free coffee"
      Then Lucy hears Sean's message

  Rule: Shouts should only be hard if listener is within range

    Scenario: Listener is within range

    Scenario: Listener is out of range
