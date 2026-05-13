import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Alumno, Profesor, Asignatura } from '../../models/ies.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  alumnos: Alumno[] = [];
  profesores: Profesor[] = [];
  asignaturas: Asignatura[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlumnos().subscribe((data: Alumno[]) => this.alumnos = data);
    this.apiService.getProfesores().subscribe((data: Profesor[]) => this.profesores = data);
    this.apiService.getAsignaturas().subscribe((data: Asignatura[]) => {
      this.asignaturas = data;
      this.loading = false;
    });
  }
}
