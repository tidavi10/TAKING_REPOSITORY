package taking.api.exceptions;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fasterxml.jackson.databind.ObjectMapper;

import taking.api.model.Usuarios;

@ControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(value = {BadRequestException.class})
	public ResponseEntity<Object> handlerBadRequestException(BadRequestException e) {
		
		ApiException apiException = new ApiException(e.getMessage());
		
		return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value = {NotFoundException.class})
	public ResponseEntity<Object> handlerNotFoundException(NotFoundException e) {
		
		ApiException apiException = new ApiException(e.getMessage());
		
		return new ResponseEntity<>(apiException, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = {MethodArgumentNotValidException.class})
	public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		List<String> message = new ArrayList<String>();
		
		for(int i = 0; i < e.getErrorCount(); i++) {
			message.add(e.getBindingResult().getAllErrors().get(i).getDefaultMessage());
		}
		
		return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value = {ConstraintViolationException.class})
	public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException e) {
		
		List<String> message = new ArrayList<String>();
	    Set<ConstraintViolation<?>> violations = e.getConstraintViolations();
	    for (ConstraintViolation<?> violation : violations) {
	      message.add(violation.getMessage());
	    }
		
		return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
	}
}