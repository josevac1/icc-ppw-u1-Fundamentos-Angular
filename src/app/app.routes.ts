import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';


export const routes: Routes = [
        {
            path: 'home',
            component: HomePage

        },


        {
            path: 'Perfil',
            component: PerfilPage
        }
];