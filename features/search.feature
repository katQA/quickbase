Feature: Search functionality

  Scenario: Search for click
    Given I open webdriverio page
    When I go to API
    And search for <click>
    Then the correct API page is returned

  Scenario: Ensure Protocols section has correct list items
    Given I open webdriverio page
    When I go to API
    And I click on the Protocols section in the left navigation bar
    Then the correct list under the Protocols section is displayed

  Scenario: Ensure Environment Variables leads to correct url
    Given I open webdriverio page
    When I go to API
    And I click on the Environment section in the left navigation bar
    Then the correct Environment Variables page is returned

  Scenario: Search for special charracter
    Given I open webdriverio page
    When I go to API
    And search for <$>
    Then search results are displayed