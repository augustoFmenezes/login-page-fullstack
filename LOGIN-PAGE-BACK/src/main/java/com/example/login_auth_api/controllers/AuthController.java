package com.example.login_auth_api.controllers;

import com.example.login_auth_api.domain.user.User;
import com.example.login_auth_api.dto.LoginRequestDTO;
import com.example.login_auth_api.dto.RegisterRequestDTO;
import com.example.login_auth_api.dto.ResponseDTO;
import com.example.login_auth_api.infra.security.TokenService;
import com.example.login_auth_api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

        @PostMapping("/login")
        public ResponseEntity login(@RequestBody LoginRequestDTO body) {
            User user = this.repository.findByEmail(body.email())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
            if(passwordEncoder.matches(body.senha(), user.getSenha())) {
                String token = this.tokenService.gerarToken(user);
                return ResponseEntity.ok(new ResponseDTO(user.getNome(), token));
            }
            return ResponseEntity.badRequest().build();
        }

        @PostMapping("/register")
        public ResponseEntity register(@RequestBody RegisterRequestDTO body) {
            Optional<User> user = this.repository.findByEmail(body.email());

            if(user.isEmpty()) {
                User newUser = new User();
                newUser.setSenha(passwordEncoder.encode(body.senha()));
                newUser.setEmail(body.email());
                newUser.setNome(body.nome());
                this.repository.save(newUser);

                String token = this.tokenService.gerarToken(newUser);
                return ResponseEntity.ok(new ResponseDTO(newUser.getNome(), token));
            }
            return ResponseEntity.badRequest().build();
        }

}
