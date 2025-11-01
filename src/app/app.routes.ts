import { Routes } from '@angular/router';


import { Component } from '@angular/core';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';


export const routes: Routes = [
        {
            path: '',
            component: HomePage

        },


        {
            path: 'Perfil',
            component: PerfilPage
        }
];