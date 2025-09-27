import { Routes } from '@angular/router';
import { ComponentTestComponent } from './component-test';
import { OriginalComponent } from './original';

export const routes: Routes = [
  { path: '', component: ComponentTestComponent },
  { path: 'original', component: OriginalComponent },
  { path: '**', redirectTo: '' }
];
