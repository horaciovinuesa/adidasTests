package com.qa.pages;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

import com.qa.runner.TestBase;

import gherkin.deps.com.google.gson.JsonArray;
import gherkin.deps.com.google.gson.JsonElement;
import gherkin.deps.com.google.gson.JsonObject;
import gherkin.deps.com.google.gson.JsonParser;

public class ApiPage extends TestBase {

	int statusCode = 0;

	// Actions.
	// These are the methods to be implemented from the step definitions

	public void getServiceStatus() throws IOException {
		URL serviceUrl = new URL(prop.getProperty("healthUrl"));

		// Connect to the URL using java's native library
		HttpURLConnection connection = (HttpURLConnection) serviceUrl.openConnection();
		connection.setRequestMethod("GET");
		connection.connect();

		statusCode = connection.getResponseCode();

	}

	public void getStatusCode() {
		assertEquals(200, statusCode);
		System.out.println("Service status checked. Status: " + statusCode);
	}

	public JsonObject getCityData(String city, String queryType) throws Exception {
		String sURL = prop.getProperty("baseUrl");
		String apiURL = "";
		if (queryType.equals("name")) {
			apiURL = sURL + "?q=" + "" + city + "&" + prop.getProperty("apiKey");
		} else if (queryType.equals("id")) {
			apiURL = sURL + "?id=" + "" + city + "&" + prop.getProperty("apiKey");

		} else if (queryType.equals("zipcode")) {
			apiURL = sURL + "?zip=" + "" + city + "&" + prop.getProperty("apiKey");
		} else {
			throw new Exception("No query type was specified to fetch weather data");
		}

		// Connect to the URL using java's native library
		URL url = new URL(apiURL);
		URLConnection request = url.openConnection();
		request.connect();

		// Convert to a JSON object
		JsonParser jp = new JsonParser();
		JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent())); // Convert the input
																								// stream to a json
																								// element
		JsonObject json = root.getAsJsonObject(); // Convert to json object

		// Get the city name from response
		String cityName = ((JsonObject) root).get("name").getAsString();
		System.out.println("City data obtained for " + city + " Got: " + cityName);

		return json;
	}

	public JsonObject getCityData(String lat, String lon, String queryType) throws Exception {
		String sURL = prop.getProperty("baseUrl");
		String apiURL = "";
		if (lat != null && lon != null) {
			apiURL = sURL + "?lat=" + lat + "&lon=" + lon + "&" + prop.getProperty("apiKey");
		} else {
			throw new Exception("No query type was specified to fetch weather data");
		}

		// Connect to the URL using java's native library
		URL url = new URL(apiURL);
		URLConnection request = url.openConnection();
		request.connect();

		// Convert to a JSON object
		JsonParser jp = new JsonParser();
		JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent())); // Convert the input
																								// stream to a json
																								// element
		JsonObject json = root.getAsJsonObject(); // Convert to json object

		// Get the city name from response
		String cityName = ((JsonObject) root).get("name").getAsString();
		System.out.println("City data obtained for " + lat + " " + lon + " " + " Got: " + cityName);

		return json;
	}
	
	public void verifyResponseSections(JsonObject cityData, String weather, String main, String wind, String clouds) {
		
		JsonArray weatherData = cityData.getAsJsonArray(weather);
		JsonObject mainData = cityData.getAsJsonObject(main);
		JsonObject windData = cityData.getAsJsonObject(wind);
		JsonObject cloudsData = cityData.getAsJsonObject(clouds);

		assertNotNull(weatherData);
		assertNotNull(mainData);
		assertNotNull(windData);
		assertNotNull(cloudsData);
		
		String cityName = ((JsonObject) cityData).get("name").getAsString();
		System.out.println("Response sections present for city " + cityName + ": weather main wind clouds");
	}

}
