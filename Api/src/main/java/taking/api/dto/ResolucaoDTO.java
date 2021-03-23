package taking.api.dto;

import java.io.Serializable;
import java.util.Date;

import taking.api.model.Resolucao;

public class ResolucaoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String tempoGasto;
	private Date dataResolucao;
	
	public ResolucaoDTO(Resolucao resolucao) {
		tempoGasto = resolucao.getTempoGasto();
		dataResolucao = resolucao.getTimestamp();
	}
	public String getTempoGasto() {
		return tempoGasto;
	}
	public Date getDataResolucao() {
		return dataResolucao;
	}
	public void setTempoGasto(String tempoGasto) {
		this.tempoGasto = tempoGasto;
	}
	public void setDataResolucao(Date dataResolucao) {
		this.dataResolucao = dataResolucao;
	}
}
