import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { toast } from 'ngx-sonner';

interface LoginForm {
  email: FormControl,
  senha: FormControl
}

@Component({
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  providers: [LoginService],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.senha).subscribe({
      next: () => toast.success('Login realizado com sucesso!'),
      error: () => toast.error('Email ou senha inválidos')
    });
  }
  navigate(){
    this.router.navigate(["cadastro"])
  }
}
