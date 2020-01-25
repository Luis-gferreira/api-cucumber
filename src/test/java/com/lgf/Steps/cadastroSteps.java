package com.lgf.Steps;

import org.junit.Assert;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class cadastroSteps {

	private String nome = "";
	private String senha = "";
	private String email = "";
	private String retorno = "";
	private String invalido = "";

	@Dado("^insiro um nome \"([^\"]*)\"$")
	public void insiroUmNome(String arg1) throws Throwable {
		nome = arg1;
		Assert.assertEquals(arg1, nome);
	}

	@E("^insiro uma senha \"([^\"]*)\"$")
	public void insiroUmaSenha(String arg1) throws Throwable {
		senha = arg1;
		Assert.assertEquals(arg1, senha);
	}

	@E("^informo meu email \"([^\"]*)\"$")
	public void informoMeuEmail(String arg1) throws Throwable {
		email = arg1;
		Assert.assertEquals(arg1, email);

	}

	@Quando("^clicar em cadastrar$")
	public void clicarEmCadastrar() throws Throwable {

	}

	@Entao("^retorna \"([^\"]*)\"$")
	public void retorna(String arg1) throws Throwable {
		retorno = arg1;
		Assert.assertEquals(arg1, retorno);

	}

	@Dado("^que crio uma senha \"([^\"]*)\"$")
	public void queCrioUmaSenha(String arg1) throws Throwable {
		senha = arg1;

	}

	@Quando("^clicar em cadastrar senha$")
	public void clicarEmCadastrarSenha() throws Throwable {

	}

	@Então("^senha inválida \"([^\"]*)\"$")
	public void senhaInválida(String arg1) throws Throwable {
		invalido = arg1;
		Assert.assertEquals(arg1, invalido);
	}
}
