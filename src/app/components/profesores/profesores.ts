import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Profesor } from '../../models/ies.models';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class ProfesoresComponent implements OnInit {
  profesores: Profesor[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.apiService.getProfesores().subscribe((data: Profesor[]) => this.profesores = data);
  }
}
