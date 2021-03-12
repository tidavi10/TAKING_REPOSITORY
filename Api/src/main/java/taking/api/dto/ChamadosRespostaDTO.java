package taking.api.dto;

import java.io.Serializable;

import taking.api.model.Chamados;

public class ChamadosRespostaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String descricao;
	private String status;
	private Integer totalDePaginas;
	
	public ChamadosRespostaDTO() {
	}

	public ChamadosRespostaDTO(Chamados chamado) {
		this.id = chamado.getId();
		this.descricao = chamado.getDescricao();
		this.status = chamado.getStatus();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public Integer getTotalDePaginas() {
		return totalDePaginas;
	}

	public void setTotalDePaginas(Integer totalDePaginas) {
		this.totalDePaginas = totalDePaginas;
	}
}
