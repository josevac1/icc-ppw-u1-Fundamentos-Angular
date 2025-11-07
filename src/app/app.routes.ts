import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectoDospage } from './features/Proyecto-dospage/Proyecto-dospage';
import { ProyectosPage } from './features/Proyectos-page/Proyectos-page';

export const routes: Routes = [
        {
            path: '',
            component: HomePage

        },


        {
            path: 'perfil',
            component: PerfilPage
        },
        {
            path: 'page',
            component: ProyectosPage
        },
        {
            path: 'dospage',
            component: ProyectoDospage
        }
        
        
        
];