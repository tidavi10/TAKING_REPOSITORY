package taking.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import taking.api.handler.RestExceptionHandler;
import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;

@Service
public class UsuariosAdmService {
	
	private final UsuariosAdmRepository usuariosAdmRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UsuariosAdmService(UsuariosAdmRepository usuariosAdmRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuariosAdmRepository = usuariosAdmRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	public UsuariosAdm salvar(UsuariosAdm usuario) {
		usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
        return usuariosAdmRepository.save(usuario);
    }
	
	/*public List<UsuariosAdm>findById(Long id) throws Exception {
		Optional<UsuariosAdm> adm = usuariosAdmRepository.findById(id);
		if(adm == null) {
			throw new Exception();
		}
		return adm;
		
	}*/
	
}