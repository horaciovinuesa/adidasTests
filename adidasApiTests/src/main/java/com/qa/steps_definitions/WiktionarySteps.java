package com.qa.steps_definitions;

import static org.junit.Assert.assertEquals;

import com.qa.pages.WiktionaryPage;
import com.qa.runner.TestBase;
import com.qa.runner.TestUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WiktionarySteps extends TestBase{
	
	WiktionaryPage wikipage;
	
	@Given("^User is on wiktionary homepage$")
	public void user_gets_the_service_status(){
		TestBase.initialization();
		wikipage = new WiktionaryPage();
		String title = wikipage.validatPageTitle();
	    assertEquals(TestUtils.WIKTIONARY_PAGE_TITLE, title);
	}
	
	@When("^User enters the word (.+) on the search field$")
	public void user_enters_the_word_on_search_field(String searchString){
		wikipage.clickOnSearchField();
		wikipage.enterSearchQuery(searchString);
	}
	
	@When("^User clicks on look up button$")
	public void user_clicks_on_lookup_button(){
		wikipage.clickOnLookUp();
	}
	
	@Then("^The results contain the value (.+) on the page$")
	public void user_clicks_on_lookup_button(String expectedResult){
		wikipage.validateSearchResult(expectedResult);
	}
	
	
	

}
