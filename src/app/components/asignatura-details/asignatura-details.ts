import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Asignatura, Matricula } from '../../models/ies.models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-asignatura-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignatura-details.html',
  styleUrl: './asignatura-details.css',
})
export class AsignaturaDetails implements OnInit {

  asignatura: Asignatura | null = null;
  matriculas: Matricula[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const idAsig = +id;

      this.apiService.getAsignaturasPorId(idAsig).subscribe(data => {
        this.asignatura = data;
      });

      this.apiService.getMatriculas().subscribe(data => {
        this.matriculas = data.filter(m => m.asignatura.id == idAsig);
      });
    }
  }
}

