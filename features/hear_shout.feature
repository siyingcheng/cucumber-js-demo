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

  Rule: Listener should be able to hear multiple shouts

    Scenario: Two shouts
      Given a person named Sean
      And a person named Lucy
      When Sean shouts "Free bagels!"
      And Sean shouts "Free toast!"
      Then Lucy hears the following messages:
        | Free bagels! |
        | Free toast!  |

  Rule: Maximum length of message is 180 characters

    Scenario: Message is within length limit
      Given a person named Sean
      And a person named Lucy
      When Sean shouts following message
        """
        This is a really long meesage
        so long in fact that I am not going to 
        be allowed to send it, at least if I keep
        typing like this until the length is over
        the limit of 180 characters.
        """
      Then Lucy should not hear a shout
