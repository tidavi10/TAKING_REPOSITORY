package taking.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import taking.api.model.Status;
import taking.api.service.StatusService;

@RestController
@RequestMapping(value = "/status")
public class StatusController {

	@Autowired
	private StatusService statusService;
	
	@GetMapping
	@CrossOrigin(origins = "*")
	public ResponseEntity<List<Status>> listaDeStatus(){
		return statusService.getStatus();
	}
	
	@RequestMapping(value = "/**/**",method = RequestMethod.OPTIONS)
	public ResponseEntity handle() {
	    return new ResponseEntity(HttpStatus.OK);
	}
}
