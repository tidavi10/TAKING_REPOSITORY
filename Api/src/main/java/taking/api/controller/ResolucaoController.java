package taking.api.controller;

import java.util.Date;
import java.util.List;

import javax.persistence.TransactionRequiredException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import taking.api.model.Chamados;
import taking.api.model.Resolucao;
import taking.api.repository.ChamadosRepository;
import taking.api.repository.ResolucaoRepository;
import taking.api.service.ChamadosService;
import taking.api.service.ResolucaoService;

@RestController
@RequestMapping("/resolucao")
public class ResolucaoController {

	@Autowired
	private ResolucaoService resolucaoService;

	@Autowired
	private ResolucaoRepository resolucaoRepository;

	@Autowired
	private ChamadosRepository chamadosRepository;

	//Retorna todas as resoluções paginadas, possivelmente sera excluido posteriormente
	@GetMapping("/{numeroPagina}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public List<Resolucao> retornoPaginado(@PathVariable int numeroPagina) {
		return resolucaoService.findResolucaoPaginated(numeroPagina);
	}
	
	//Apenas para testes, será excluido posteriormente
	@GetMapping
	public List<Resolucao> findAll(){
		return resolucaoRepository.findAll();
	}

	//Insere a resposta do chamado na tabela e atualiza o status do chamado
	@PostMapping("/resposta/{IdChamado}/{IdAdm}")
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	public ResponseEntity<Resolucao> respostaChamado(@PathVariable Long IdChamado, @PathVariable Long IdAdm,
			@RequestBody Resolucao resolucao) throws TransactionRequiredException{
		
		if (resolucaoService.idAndAdmExists(IdChamado, IdAdm)) { 
			resolucao.setId(IdChamado);
			resolucao.setTimestamp(new Date());
			resolucaoRepository.save(resolucao);
			chamadosRepository.updateStatus("Finalizado", IdChamado);
			return new ResponseEntity<Resolucao>(HttpStatus.OK);
		}

		return new ResponseEntity<Resolucao>(HttpStatus.BAD_REQUEST);

	}

}
