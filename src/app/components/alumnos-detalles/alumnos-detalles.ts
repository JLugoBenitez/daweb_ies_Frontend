import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Alumno } from '../../models/ies.models';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-alumnos-detalles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alumnos-detalles.html',
  styleUrl: './alumnos-detalles.css'
})
export class AlumnosDetallesComponent implements OnInit {
  alumno: Alumno | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // 1. Obtenemos el ID de la URL
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // 2. Llamamos al servicio (Observable) y nos suscribimos
      this.apiService.getAlumnoPorId(+id).subscribe({
        next: (data) => {
          this.alumno = data;
        },
        error: (err) => {
          console.error('Error al cargar el alumno', err);
        }
      });
    }
  }
}
