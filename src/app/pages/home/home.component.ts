import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Ipersonas, Result } from '../../interfaces/IPersonas';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
 
  public personas: Result[] = [];
  public paginas: number[] = [1,2,3,4,5,6];
  public indice:number =1;
  public selectedPersona: Result | null = null;
  public modalVisible: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPersonas().subscribe( persona => {
      //this.personas = persona
      this.personas = persona.results.map(datos => datos);
      console.log(this.personas);
    });
  }

  cambiarPagina(pag: number){
    this.dataService.getPagina(pag).subscribe( data => {
      this.personas = data.results.map(datos => datos);
      this.indice=pag;
    });
  }

  incrementarVector(pag: number){
    this.paginas = this.paginas.map( numero => numero + 1);
    this.cambiarPagina(pag);
    //console.log(pag);
  }

  decrementarVector(pag: number){
    this.paginas = this.paginas.map( numero => numero - 1);
    this.cambiarPagina(pag);
    //console.log(pag);
  }

 
  openModal(persona: Result): void {
    console.log('Opening modal for:', persona.name);
    this.selectedPersona = persona;
    this.modalVisible = true;
  }

  closeModal(): void {
    console.log('Closing modal');
    this.modalVisible = false;
  }

}
