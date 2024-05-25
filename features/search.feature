Feature: The Internet Guinea Pig Website

  Scenario: Search for click
    Given I open webdriverio page
    When I go to API
    And search for <click>
    Then the correct information/page is returned

  Scenario: Ensure Protocols section has correct list items
    Given I open webdriverio page
    When I go to API
    And I expand the Protocols section in the left navigation bar
    Then the correct list under the Protocols section is displayed