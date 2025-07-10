package com.foodshare.controller;

import com.foodshare.model.LoginResponse;
import com.foodshare.model.RegisterUserDto;
import com.foodshare.model.User;
import com.foodshare.service.AuthenticationService;
import com.foodshare.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        logger.info("Registering user with email: {}", registerUserDto.getEmail());
        User registeredUser = authenticationService.signup(registerUserDto);
        String jwtToken = jwtService.generateToken(registeredUser);
        registeredUser.setToken(jwtToken);
        registeredUser.setExpiresIn(jwtService.getExpirationTime());
        logger.info("Generated JWT token for user: {}", registeredUser.getEmail());
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/signin")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody RegisterUserDto loginUserDto) {
        logger.info("Authenticating user with email: {}", loginUserDto.getEmail());
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        logger.info("Generated JWT token for user: {}", authenticatedUser.getEmail());
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        logger.info("Health check endpoint hit");
        return ResponseEntity.ok("Authentication service is running");
    }

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok("pong");
    }
}
