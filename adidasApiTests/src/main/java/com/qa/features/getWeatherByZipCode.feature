Feature: Get weather by zip code 
	I want to be able to get the current weather for a given city using the city zip code
  
@sanity @apiTest
Scenario Outline: Get current weather data by zip code 
	Given  User gets the data for the city <CityZipCode> by city zipcode 
	Then The data is complete and contains the sections weather main wind clouds 
	
	Examples: 
		|CityZipCode |
		|5000,AR     |
		|50001,ES    |
		|EC3,GB      |