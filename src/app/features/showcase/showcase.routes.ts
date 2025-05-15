// src/app/features/showcase/showcase.routes.ts
import { Routes } from '@angular/router';
import { ButtonShowcaseComponent } from './pages/buttons/button-showcase.component';
import { CardShowcaseComponent } from './pages/cards/card-showcase.component';
import { ModalShowcaseComponent } from './pages/modals/modal-showcase.component';

export const SHOWCASE_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
    },

    {
        path: 'buttons',
        component: ButtonShowcaseComponent
    },

    {
        path: 'cards',
        component: CardShowcaseComponent
    },

    {
        path: 'modals',
        component: ModalShowcaseComponent
    }
];