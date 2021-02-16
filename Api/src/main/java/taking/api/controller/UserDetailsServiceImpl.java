package taking.api.controller;

import taking.api.model.Usuarios;
import taking.api.repository.UsuariosRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import java.util.Collections;

@Component
public class UserDetailsServiceImpl implements UserDetailsService
{
    private UsuariosRepository usuariosRepository;
    public UserDetailsServiceImpl(UsuariosRepository usuariosRepository)
    {
        this.usuariosRepository = usuariosRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        Usuarios usuarios = usuariosRepository.findByUsername(username);
        if(usuarios == null)
        {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(usuarios.getUsername(), usuarios.getSenha(), Collections.emptyList());
    }
}