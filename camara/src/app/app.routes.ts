import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.page').then((m) => m.GalleryPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full',
  },
];