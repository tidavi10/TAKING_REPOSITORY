package taking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import taking.api.config.JwtTokenUtil;
import taking.api.dto.TokenDTO;
import taking.api.exceptions.AutenticacaoException;
import taking.api.model.JwtRequest;
import taking.api.model.JwtResponse;
import taking.api.model.Usuarios;
import taking.api.repository.UsuariosRepository;
import taking.api.service.JwtUserDetailsService;


@Api(tags="Autenticação")
@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@Autowired
	private UsuariosRepository usuariosRepository;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO>createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getSenha()));
		
		
		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getEmail());
		
		Usuarios usuario = usuariosRepository.findByEmail(authenticationRequest.getEmail());

		final String token = jwtTokenUtil.generateToken(userDetails);
		TokenDTO tokenResponse = new TokenDTO();
		tokenResponse.setId(usuario.getId());
		tokenResponse.setToken(token);
		
		return ResponseEntity.ok(tokenResponse);
		
	}
	
	@RequestMapping(value = "/admAuth", method = RequestMethod.POST)
	public ResponseEntity<?> createAdmToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		authenticate(authenticationRequest.getEmail(), authenticationRequest.getSenha());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getEmail());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
		
	}

	//Exception autenticação
	private void authenticate(String username, String password) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (BadCredentialsException e) {
			throw new AutenticacaoException("Usuário e/ ou senha inválidos");
		}
	}
}