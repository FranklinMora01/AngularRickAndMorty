import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'home/:id', component: HomeComponent},
    {path: 'modal', component: ModalComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
