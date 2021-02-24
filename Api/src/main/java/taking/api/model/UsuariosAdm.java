package taking.api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "usuariosadm")
public class UsuariosAdm implements Serializable {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idAdm")
	private Long ID;
	
	@NotBlank (message = "E-mail inválido")
	@Column(unique = true)
	private String email;
	
	@NotBlank (message = "Senha inválida")
	private String senha;

	public Long getID() {
		return ID;
	}
	
	public UsuariosAdm(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	
	public UsuariosAdm() {
		
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}
	
	public void JwtRequest()
	{
	}

	public void JwtRequest(String email, String senha) {
		this.setEmail(email);
		this.setSenha(senha);
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

}
