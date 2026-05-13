import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Asignatura } from '../../models/ies.models';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css'
})
export class AsignaturasComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAsignaturas().subscribe((data: Asignatura[]) => this.asignaturas = data);
  }
}
