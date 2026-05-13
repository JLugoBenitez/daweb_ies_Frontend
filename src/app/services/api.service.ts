import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Alumno, Profesor, Asignatura, Matricula } from '../models/ies.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.apiUrl}/alumno`);
  }

  getAlumnoPorId(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/alumno/${id}`);
  }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(`${this.apiUrl}/profesor`);
  }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.apiUrl}/asignatura`);
  }

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.apiUrl}/matricula`);
  }
  getMatriculasPorId(id:number): Observable<Matricula>{
    return this.http.get<Matricula>(`${this.apiUrl}/matriculas/${id}`);
  }
}
