Feature: Get weather by city id 
	I want to be able to get the current weather for a given city using the city id

@sanity @apiTest
Scenario Outline: Get current weather data by city ID 
	Given User gets the data for the city <CityID> by city id 
	Then The data is complete and contains the sections weather main wind clouds 
	
	Examples: 
		|CityID  |
		|3686513 |
		|2643743 |
		|3104324 |