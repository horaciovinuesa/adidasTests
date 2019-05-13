Feature: Search on Wiktionary page
	I want to be able to search for any given word on the wikstionary page
  
@sanity @uiTest
Scenario Outline: Search for specific string on wikitionary page
	Given User is on wiktionary homepage
	And User enters the word <lookup> on the search field
	When User clicks on look up button
	Then The results contain the value <expectedDefinition> on the page
	
	Examples: 
		|lookup |expectedDefinition 																		   |
		|apple  |A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates. |
		|pear   |An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.|