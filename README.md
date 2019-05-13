# adidasTests

The tool selection 

* Java
* Cucumber
* Maven
* POM structure

I found particularly practical to have Java and MAVEN to handle the dependencies. 
Also, I chosen Cucumber because I have worked with it in the past (could have been JBehave as well, but in my experience it is not so friendly to configure)
Finally, the POM (page object modeling) structure is the way to go for BDD, it allows a better organization of the methods and objects through the project. I know that this is a fact when we are handling different pages of a UI website, in this case, I toke the API as a page to follow this organization concept.

Pre-Requirements:
In order to run the project you would need the following installed on your local machine:
- Java JDK: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html 
- A Java IDE: https://www.eclipse.org/downloads/
- Maven installed on your system (In my case, I worked on a Mac, and there was no need for any extra step other than building the MAVEN project)




Steps for running the tests:

1. Import the project as “Existing maven project”
2. Add JUnit 4 to the build path (if this is thrown on an IDE such as eclipse, you will be prompted to fix it automatically)
3. Install the “Natural” plugin in your eclipse. This is for handling the feature files, if you navigate to any feature file, the IDE will prompt with the installation option, don’t install the JBehave plugin, just the cucumber one.
4. Right click on the project root folder, select Maven -> Update project in order to download dependencies and do a build install
5. On the config file, replace <horacioapikey> with a valid app id 

In order to execute the tests right click on the TestRunner.java file under com.qa.runner and select Run As -> JUnit Test
This will generate a report under reports/execution_reports
Right click on “execution_reports” -> Show in -> System explorer
Double click on “index.html” and you will see the generated cucumber report with the results


List of test executed:

Selenium tests:
Search for two particular strings on wiktionary and asserting that the results are present on the page.
Note: The driver is not closing after a failure, it is currently being exited after the last step, this should be done on an @After method as part of the JUnit execution, this was not completed, the driver is instantiated on the TestBase class instead of the runner.


API Tests:

* Health check
* Get weather by city name
* Get weather by city id
* Get weather by city zip code
* Get weather by city geolocation

I selected a small set of test data: Cordoba, Argentina Zaragoza, ES and London, GB
These were selected by no particular reason
