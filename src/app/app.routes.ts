import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home').then((m) => m.Home),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products').then((m) => m.Products),
  },
  {
    path: 'hydrodynamics',
    loadComponent: () => import('./pages/hydrodynamics').then((m) => m.Hydrodynamics),
  },
  {
    path: 'creed',
    loadComponent: () => import('./pages/creed').then((m) => m.Creed),
  },
  {
    path: 'quiver',
    loadComponent: () => import('./pages/quiver').then((m) => m.Quiver),
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community').then((m) => m.Community),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
