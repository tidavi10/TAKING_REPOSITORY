package taking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

import taking.api.model.Usuarios;

import taking.api.repository.UsuariosRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {
	
	
	@Autowired
	private UsuariosRepository usuariosRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	public UsuariosController(UsuariosRepository usuariosRepository, BCryptPasswordEncoder bCryptPasswordEncoder)
	{
		this.usuariosRepository = usuariosRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/cadastrados")
	public @ResponseBody List<Usuarios> listausuarios() {
		return usuariosRepository.findAll();
	}
	
	@PostMapping("/cadastro")
	public void signUp(@RequestBody Usuarios usuarios)
	{
		usuarios.setSenha(bCryptPasswordEncoder.encode(usuarios.getSenha()));
		usuariosRepository.save(usuarios);
	}
	
	
	
/**	
	@Autowired
	private UsuariosRepository UsuariosRepository;
	
	
	@RequestMapping(method=RequestMethod.GET, value="/cadastro")
	public @ResponseBody List<Usuarios> listausuarios() {
		return UsuariosRepository.findAll();
	}
	

	@PostMapping("/cadastro")
	public Usuarios cadastroUsuario(@RequestBody Usuarios usuario) {
		return UsuariosRepository.save(usuario);
	}
**/
	
	

}