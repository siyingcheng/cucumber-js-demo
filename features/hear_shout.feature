Feature: Hear Shout

  Scenario: Listener is whitin range
    Given Lucy is located 15 meters from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean's message

  Scenario: Listener is outside range
    Given Lucy is standing 20 meters from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy does not hear Sean's message
