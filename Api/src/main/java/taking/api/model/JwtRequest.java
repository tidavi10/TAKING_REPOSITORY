package taking.api.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	
	private String usuario;
	private String senha;
	
	//need default constructor for JSON Parsing
	public JwtRequest()
	{
		
	}

	public JwtRequest(String usuario, String password) {
		this.setUsuario(usuario);
		this.setSenha(senha);
	}

	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return this.senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}