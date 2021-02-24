package taking.api.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity
public class Resolucao {

	@Id
	private Long id;
	
	@OneToOne
	@PrimaryKeyJoinColumn
	private Chamados chamados;
	
	@NotBlank
	private String descricao;
	
	@Column(name = "timestamp", updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Chamados getChamados() {
		return chamados;
	}

	public void setChamados(Chamados chamados) {
		this.chamados = chamados;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	
}
