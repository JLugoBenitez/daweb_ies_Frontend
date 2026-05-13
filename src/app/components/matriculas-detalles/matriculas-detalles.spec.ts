import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasDetalles } from './matriculas-detalles';

describe('MatriculasDetalles', () => {
  let component: MatriculasDetalles;
  let fixture: ComponentFixture<MatriculasDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
