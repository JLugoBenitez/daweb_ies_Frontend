import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Matricula } from '../../models/ies.models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,RouterLink } from '@angular/router';

@Component({
  selector: 'app-matriculas-detalles',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './matriculas-detalles.html',
  styleUrl: './matriculas-detalles.css',
})
export class MatriculasDetalles implements OnInit {
  id!:number
  matricula : Matricula | null = null;

constructor(
  private route: ActivatedRoute,
  private apiService: ApiService
) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = Number(params['id'])
  });
}
}
