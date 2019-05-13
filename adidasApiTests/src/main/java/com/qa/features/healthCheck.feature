Feature: Health check
  I want to be able to get the current weather for the default city and check that the service is up and running

  @smoke @sanity @apiTest
  Scenario: Get status of the service by quering the default city
    Given User gets the status of the openweathermap service
    Then The service is up and running
