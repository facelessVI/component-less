import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'components/buttons',
        pathMatch: 'full'
    },
    {
        path: 'components/buttons',
        loadChildren: () => import('./features/buttons/buttons.routes').then(m => m.BUTTONS_ROUTES)
    },
    // Add other feature routes similarly
    {
        path: '**',
        redirectTo: 'components/buttons'
    }
];