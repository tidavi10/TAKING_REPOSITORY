package taking.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import taking.api.model.Resolucao;

public interface ResolucaoRepository extends JpaRepository<Resolucao, Long> {
	
	List<Resolucao> findByChamadosId(Long id);
}
