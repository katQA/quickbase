Feature: Search functionality

  Scenario: Search for click
    Given I open webdriverio page
    When I go to API
    And I search for click
    Then the correct API page is returned

  Scenario: Ensure Protocols section has correct list items
    Given I open webdriverio page
    When I go to API
    And I click on the Protocols section in the left navigation bar
    Then the correct list under the Protocols section is displayed
  
  Scenario: Search for special character
    Given I open webdriverio page
    And I search for $
    Then no search results are displayed
  
  Scenario Outline: Ensure the menu items in the main navigation leads to correct url
    Given I open webdriverio page
    When I open navigation <item>
    Then the corresponding <page> is returned
  Examples:
    |item               |page               |
    |blog               |blog               |
    |docs/gettingstarted|docs/gettingstarted|
    |docs/contribute    |docs/contribute    |
    |community/support  |community/support  |
    |docs/sponsor       |docs/sponsor       |