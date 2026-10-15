import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { toast } from 'ngx-sonner';

interface CadastroForm {
  nome: FormControl
  email: FormControl,
  senha: FormControl,
  confirmarSenha: FormControl
}

@Component({
  imports: [DefaultLoginLayout, ReactiveFormsModule, PrimaryInput],
  providers: [LoginService],
  selector: 'app-cadastro',
  styleUrl: './cadastro.scss',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  cadastroForm!: FormGroup<CadastroForm>;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    this.loginService.cadastro(this.cadastroForm.value.nome, this.cadastroForm.value.email, this.cadastroForm.value.senha).subscribe({
      next: () => toast.success('Cadastro realizado com sucesso!'),
      error: () => toast.error('Email ou senha inválidos')
    });
  }
  navigate(){
    this.router.navigate(["login"])
  }
}
