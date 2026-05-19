import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { AlumnosComponent } from './components/alumnos/alumnos';
import { ProfesoresComponent } from './components/profesores/profesores';
import { AsignaturasComponent } from './components/asignaturas/asignaturas';
import { MatriculasComponent } from './components/matriculas/matriculas';
import { AlumnosDetallesComponent } from './components/alumnos-detalles/alumnos-detalles';
import { AsignaturaDetails } from './components/asignatura-details/asignatura-details';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/:id', component: AlumnosDetallesComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'asignatura/:id', component: AsignaturaDetails },
  { path: 'matriculas', component: MatriculasComponent },
];
