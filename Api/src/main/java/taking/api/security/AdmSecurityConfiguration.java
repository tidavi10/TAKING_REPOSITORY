package taking.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import taking.api.controller.Filter.AdmJwtRequestFilter;

@Configuration
@EnableWebSecurity
@Order(2)
public class AdmSecurityConfiguration extends WebSecurityConfigurerAdapter implements ApplicationContextAware {

	@Autowired
	private AdmJwtRequestFilter admJwtRequestFilter;

	private BCryptPasswordEncoder bCryptPasswordEncoder;
	private UserDetailsService userDetailsService;

	public AdmSecurityConfiguration(UserDetailsService userDetailsService,
			BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.userDetailsService = userDetailsService;
	}
	
	@Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors().and().csrf().disable().authorizeRequests()
        .antMatchers(HttpMethod.POST, "/admAuth", "/usuariosadm/cadastro")
        .permitAll()
        .anyRequest()
        .authenticated();
		
		httpSecurity
        .addFilterBefore(admJwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(this.userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}
}
