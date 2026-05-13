import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Alumno } from '../../models/ies.models';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlumnos().subscribe((data: Alumno[]) => this.alumnos = data);
  }
}
