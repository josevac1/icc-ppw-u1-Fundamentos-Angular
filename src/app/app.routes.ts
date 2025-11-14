import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectoDospage } from './features/Proyecto-dospage/Proyecto-dospage';
import { ProyectosPage } from './features/Proyectos-page/Proyectos-page';
import { Formulario } from './features/formulario/formulario';

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
        },
        {
            path: 'formulario',
            component: Formulario
        }
        
        
        
];