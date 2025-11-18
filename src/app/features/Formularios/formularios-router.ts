import {  Routes } from "@angular/router";
import { Formulario } from "./page/formulario/formulario";
import { FormularioDynamico } from "./page/FormularioDynamico/FormularioDynamico";
import { FormularioMore } from "./page/formularioMore/formularioMore";

export const formulariosRouters: Routes=[
    {
        path: '',
        children: [
            {
                path:'Formularios-basicos',
                title:'Formularios basicos',
                component: Formulario,
            },

            {
                
                path:'Formularios-Dinamicos',
                title: 'Formularios Dinámicos',
                component: FormularioDynamico,
            },


            {
                path:'Formularios-More',
                title: 'Formularios More',
                component: FormularioMore,

            },
            {
                path:'**',
                redirectTo: 'basic'
            }


            
        ]
    }
]