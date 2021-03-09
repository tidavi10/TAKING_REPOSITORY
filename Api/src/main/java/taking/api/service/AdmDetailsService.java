package taking.api.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import taking.api.model.UsuariosAdm;
import taking.api.repository.UsuariosAdmRepository;

@Service
public class AdmDetailsService implements UserDetailsService {

	@Autowired
	private UsuariosAdmRepository usuariosAdmRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		if(email == null || "".equals(email)){
            throw new UsernameNotFoundException("valor nulo");
        }
		
		UsuariosAdm adm = usuariosAdmRepository.findByEmail(email);
		
		if(adm.getEmail() == null) {
			
			return new org.springframework.security.core.userdetails.User(adm.getEmail(), adm.getSenha(),
					new ArrayList<>());
		}
		throw new UsernameNotFoundException("User not found with username: " + email);
		
	}

}
