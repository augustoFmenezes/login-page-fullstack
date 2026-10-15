import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { User } from './pages/user/user';
import { AuthGuard } from './services/auth-guard';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "cadastro",
        component: Cadastro
    },
     {
        path: "user",
        component: User,
        canActivate: [AuthGuard]
    }


];
