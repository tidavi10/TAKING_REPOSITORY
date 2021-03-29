package com.esther.talkingtestealelo.cucumber.spring;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;

import io.github.bonigarcia.wdm.WebDriverManager;

@Configuration
@ContextConfiguration(classes={PropertiesContext.class})
public class CucumberContext {

	@Autowired
	private String webbrowser;

	@Bean(name="webdriver", destroyMethod="close")
	public WebDriver getWebDriver() {
		WebDriver webdriver = null;
		switch (webbrowser) {
			case "firefox":
				WebDriverManager.firefoxdriver().setup();
				webdriver = new FirefoxDriver();
				break;

			case "chrome":
				WebDriverManager.chromedriver().setup();
				webdriver = new ChromeDriver();
				break;

			default:
				WebDriverManager.chromedriver().setup();
				webdriver = new ChromeDriver();
				break;
		}
		return webdriver;
	}

	@Bean("wait")
	public WebDriverWait getWebDriverWait() {
		return new WebDriverWait(getWebDriver(), 5);
	}

}
