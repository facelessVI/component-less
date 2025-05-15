import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/showcase/pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'components',
        loadChildren: () => import('./features/showcase/showcase.routes').then(m => m.SHOWCASE_ROUTES)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];