import { authGuardGuard } from './Core/guards/auth.guard-guard';
import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Admin } from './admin/admin';

export const routes: Routes = [

    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: Login
    },
    {
        path: "register", component: Register
    },
    {
        path: 'Admin', component: Admin, canActivate: [authGuardGuard]
    }
];
