//package br.com.taking.Api.modelo;
//
//import java.io.Serializable;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "chamados")
//public class AberturaDeChamado implements Serializable{
//	private static final long serialVersionUID = 1L;
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
//	private String areaResposavel;
//	private String tipoDoProblema;
//	private String descricaoProblema;
//	private String anexo;
//
//	public Integer getId() {
//		return id;
//	}
//
//	public void setId(Integer id) {
//		this.id = id;
//	}
//
//	public String getAreaResposavel() {
//		return areaResposavel;
//	}
//
//	public void setAreaResposavel(String areaResposavel) {
//		this.areaResposavel = areaResposavel;
//	}
//
//	public String getTipoDoProblema() {
//		return tipoDoProblema;
//	}
//
//	public void setTipoDoProblema(String tipoDoProblema) {
//		this.tipoDoProblema = tipoDoProblema;
//	}
//
//	public String getDescricaoProblema() {
//		return descricaoProblema;
//	}
//
//	public void setDescricaoProblema(String descricaoProblema) {
//		this.descricaoProblema = descricaoProblema;
//	}
//
//	public String getAnexo() {
//		return anexo;
//	}
//
//	public void setAnexo(String anexo) {
//		this.anexo = anexo;
//	}
//}
