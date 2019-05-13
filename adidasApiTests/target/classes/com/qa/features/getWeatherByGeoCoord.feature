Feature: Get weather by geographic coordinates 
	I want to be able to get the current weather for a given city using the city geographic coordinates
  
@sanity @apiTest
Scenario Outline: Get current weather data by geographic coordinates
	Given User gets data for the city lat <lat> and lon <lon> by city geolocation
	Then The data is complete and contains the sections weather main wind clouds 
	
	Examples: 
		|lat    |lon    |
		|-27.78 |-67.24 |
		|41.65  |-0.88  |
		|51,51  |-0.13  |
		