package com.qa.pages;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.runner.TestBase;

public class WiktionaryPage extends TestBase {

	// Page Factory
	@FindBy(xpath = "//*[@name='search' and ../@class='bodySearchWrap']")
	WebElement search;

	@FindBy(name = "go")
	WebElement lookup;

	@FindBy(xpath = "//*[@class='mw-parser-output']")
	WebElement searchResults;


	// Initializing the page objects
	public WiktionaryPage() {
		PageFactory.initElements(driver, this);
	}

	// Actions
	// These are the methods to be implemented from the step definitions
	public String validatPageTitle() {
		return driver.getTitle();
	}

	public void clickOnSearchField() {
		search.click();
	}
	
	public void enterSearchQuery(String query) {
		search.sendKeys(query);
	}

	public void clickOnLookUp() {
		lookup.click();
	}

	public void validateSearchResult(String expected) {
		waitForPageLoad();
		String resultText = searchResults.getText();
		System.out.println("resulting text from query: " + resultText);
		assertTrue(resultText.contains(expected));
		driver.quit();
	}

	public void waitForPageLoad() {
		driver.findElement(By.xpath("//*[@class='mw-wiki-logo']"));
	}
}
