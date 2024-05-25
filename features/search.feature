Feature: The Internet Guinea Pig Website

  @skip
  Scenario: Search for click
    Given I open webdriverio page
    When I go to API
    And search for <click>
    Then the correct information/page is returned

  Scenario: Ensure Protocols section has correct list items
    Given I open webdriverio page
    When I go to API
    And I click on the Protocols section in the left navigation bar
    Then the correct list under the Protocols section is displayed

  @skip
  Scenario: Ensure Environment Variables leads to correct url
    Given I open webdriverio page
    When I go to API
    And I click on the Environment section in the left navigation bar
    Then the correct information/page for Environment Variables is returned

  @skip
  Scenario: Search for special charracter
    Given I open webdriverio page
    When I go to API
    And search for <@>
    Then search results are displayed