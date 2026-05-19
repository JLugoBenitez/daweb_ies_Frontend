import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Asignatura } from '../../models/ies.models';
import { AlumnosComponent } from '../alumnos/alumnos';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css'
})
export class AsignaturasComponent implements OnInit {
  asignaturas: Asignatura[] = [];
matriculas: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAsignaturas().subscribe((data: Asignatura[]) => this.asignaturas = data);
  }
}
