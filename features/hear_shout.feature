Feature: shouts
  Shouty allows user to "hear" other users "shouts" as long as they are close enough to each other.

  To do:
    - only shout to people withn a certain distance

  Rule: Shouts can be heard by other users

    Scenario: Listener is whitin range
      Given a person named Sean
      And a person named Lucy
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean's message

    Scenario: Listener is heard another message
      Given a person named Sean
      And a person named Lucy
      When Sean shouts "free coffee"
      Then Lucy hears Sean's message

  Rule: Shouts should only be hard if listener is within range

    Scenario: Listener is within range
      Given the range is 100
      And people are located at
        | name | location |
        | Sean |        0 |
        | Lucy |       50 |
      When Sean shouts
      Then Lucy should hear a shout

    Scenario: Listener is out of range
      Given the range is 100
      And people are located at
        | name  | location |
        | Sean  |        0 |
        | Larry |      150 |
      When Sean shouts
      Then Larry should not hear a shout
