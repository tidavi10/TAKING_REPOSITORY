package com.esther.talkingtestealelo.cucumber.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends PageObject{
	
	@FindBy(xpath="//body/div[@id='root']/div[1]/form[1]/div[1]/input[1]")
	private WebElement campoEmail;
	
	@FindBy(xpath="//body/div[@id='root']/div[1]/form[1]/div[2]/input[1]")
	private WebElement campoSenha;
	
	@FindBy(xpath="//button[contains(text(),'Login')]")
	private WebElement btnLogin;
	

	public LoginPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public void efetuarLogin(String email, String senha) {
		campoEmail.sendKeys(email);
		campoSenha.sendKeys(senha);
		btnLogin.click();
	}

}
