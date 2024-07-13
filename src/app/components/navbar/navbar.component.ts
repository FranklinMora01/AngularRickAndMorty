import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicioDeBuscarService } from '../../services/servicio-de-buscar.service';
import { HomeComponent } from '../../pages/home/home.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   buscarNom: string = '';
  public stringBuscar: string ='';

  public menuNavBar: any[] = [
    { path: '/character', name: 'CHARACTER' },
    { path: '/location', name: 'LOCATION' },
    { path: '/episode', name: 'EPISODE' }
  ];

  constructor(private servicioDeBuscar: ServicioDeBuscarService){
   
  }

  IniciarBusqueda(){
    //console.log('Búsqueda realizada:', this.searchTermss);
    this.servicioDeBuscar.DisparadorDeBuscar.emit({
      datasss: this.buscarNom
      
    });
    this.buscarNom ='';
  }

}
