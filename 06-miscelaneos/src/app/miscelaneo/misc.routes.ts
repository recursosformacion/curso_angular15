import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';
import { VistaPaisesComponent } from './prueba-api/vista-paises/vista-paises.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id' , 
      component: UsuarioComponent,
      children: USUARIOS_ROUTES
    },
    { path: 'paises' , component: VistaPaisesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);