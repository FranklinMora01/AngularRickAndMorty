import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeBuscarService {

  @Output() DisparadorDeBuscar: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
