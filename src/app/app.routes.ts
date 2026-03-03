import { Routes } from '@angular/router';
import { EditItemComponent } from './put-item/put-item';

export const routes: Routes = [
  { path: 'editar/:id', component: EditItemComponent }
];
