package com.lgf.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/cadastro.feature",
		glue = "com.lgf.Steps",
		plugin = {"pretty", "html:target/report-html"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE
		)
public class Runner {

}
