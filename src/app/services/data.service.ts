import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipersonas } from '../interfaces/IPersonas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPersonas(): Observable<Ipersonas>{
    return this.http.get<Ipersonas>('https://rickandmortyapi.com/api/character');
  }  

  getPagina(id: number): Observable<Ipersonas>{
    return this.http.get<Ipersonas>(`https://rickandmortyapi.com/api/character/?page=${id}`);
  }
}
