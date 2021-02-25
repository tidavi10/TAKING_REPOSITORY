package taking.api.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import taking.api.model.Chamados;
import taking.api.model.UsuariosAdm;

public interface ChamadosRepository extends JpaRepository<Chamados, Long> {

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query("update Chamados c set c.status = :status where c.id = :id")
	void updateStatus(@Param("status") String status, @Param("id") Long id);
	
	Optional<Chamados> findById(Long id);
	
	List<Chamados> findByAdm(Optional<UsuariosAdm> optional);
	
	List<Chamados> findByIdAndAdm(Long id, Optional<UsuariosAdm> adm);
	
	//existsByIdAndAdm(Long id, Optional<UsuariosAdm> adm);
}
