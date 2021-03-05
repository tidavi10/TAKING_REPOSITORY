package taking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import taking.api.model.Usuarios;

import taking.api.repository.UsuariosRepository;

@Api(tags="Usuarios")
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
	
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Retorna a lista de usuarios"),
			@ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
		})
	@ApiOperation(value = "", authorizations = { @Authorization(value = "jwtToken") })
	@RequestMapping(method=RequestMethod.GET, value="/cadastrados")
	public @ResponseBody List<Usuarios> listausuarios() {
		return usuariosRepository.findAll();
	}
	
	@PostMapping("/cadastro")
	public void signUp(@Valid @RequestBody Usuarios usuarios)
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