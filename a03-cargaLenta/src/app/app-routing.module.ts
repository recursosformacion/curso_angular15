import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'list-clientes',
  loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
},
{
  path: 'list-pedidos',
  loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
