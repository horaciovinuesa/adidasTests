Feature: Get weather by city name 
	I want to be able to get the current weather for a given city using the city name

@sanity @apiTest
Scenario Outline: Get current weather data by city name 
	Given User gets the data for the city <CityName> by city name 
	Then The data is complete and contains the sections weather main wind clouds 
	
	Examples: 
		|CityName   |
		|Cordoba,AR |
		|London,UK  |
		|Zaragoza,ES|