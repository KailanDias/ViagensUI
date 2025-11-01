import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    // Rota padrão, redireciona para /usuarios
    //{ path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: '', redirectTo: '/signup', pathMatch: 'full' }
];
