package com.qa.steps_definitions;

import com.qa.pages.ApiPage;
import com.qa.runner.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.com.google.gson.JsonObject;

public class ApiSteps extends TestBase {

	ApiPage apipage = new ApiPage();;
	JsonObject cityData;

	@Given("^User gets the status of the openweathermap service$")
	public void user_gets_the_service_status() throws Throwable {
		apipage.getServiceStatus();
	}

	@Given("^The service is up and running$")
	public void user_checks_the_service_status() throws Throwable {
		apipage.getStatusCode();
	}

	@When("^User gets the data for the city (.+) by city (.+)$")
	public void user_gets_data_for_city(String city, String queryType) throws Throwable {
		cityData = apipage.getCityData(city, queryType);
		System.out.println("City to check: " + city);
	}

	@Given("^User gets data for the city lat (.+) and lon (.+) by city (.+)$")
	public void user_gets_data_for_city_by_geoloc(String lat, String lon, String queryType) throws Throwable {
		cityData = apipage.getCityData(lat, lon, queryType);
		System.out.println("City to check: " + lat + " " + lon);
	}

	@Then("^The data is complete and contains the sections (.+) (.+) (.+) (.+)$")
	public void data_is_complete_and_sections_are_complete(String weather, String main, String wind, String clouds)
			throws Throwable {
		apipage.verifyResponseSections(cityData, weather, main, wind, clouds);
		
	}

}
