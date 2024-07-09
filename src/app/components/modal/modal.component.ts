import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/IPersonas';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() personaSeleccionadaModal: Result | null = null;

}
