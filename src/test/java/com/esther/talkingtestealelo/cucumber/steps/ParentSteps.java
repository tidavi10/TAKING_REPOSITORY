package com.esther.talkingtestealelo.cucumber.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;

import com.esther.talkingtestealelo.cucumber.spring.CucumberContext;
import com.esther.talkingtestealelo.cucumber.spring.PropertiesContext;

@ContextConfiguration(classes={CucumberContext.class, PropertiesContext.class})
public class ParentSteps {

	@Autowired
	protected WebDriver webdriver;
	
	@Autowired
	protected WebDriverWait wait;
	
	@Autowired
	protected boolean screenshotOnFailure;
	
	@Autowired
	protected String screenshotDestinationFolder;
	
}
