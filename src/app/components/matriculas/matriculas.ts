import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Matricula } from '../../models/ies.models';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css'
})
export class MatriculasComponent implements OnInit {
  matriculas: Matricula[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMatriculas().subscribe((data: Matricula[]) => this.matriculas = data);
  }
}
