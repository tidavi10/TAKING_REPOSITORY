package taking.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import taking.api.model.Resolucao;
import taking.api.repository.ResolucaoRepository;

@Service
public class ResolucaoService{

	@Autowired
	private ResolucaoRepository resolucaoRepository;
	
	public List<Resolucao> findResolucaoPaginated(int pageNo) {
		
		Pageable paginacao = PageRequest.of(pageNo, 4);
		Page<Resolucao> resultado = resolucaoRepository.findAll(paginacao);
		
		return resultado.toList();
	}
	
}
