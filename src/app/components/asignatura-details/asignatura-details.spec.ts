import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetails } from './asignatura-details';

describe('AsignaturaDetails', () => {
  let component: AsignaturaDetails;
  let fixture: ComponentFixture<AsignaturaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
