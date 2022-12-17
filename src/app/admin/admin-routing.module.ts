import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'products',
        component: ProductosComponent
      },
      {
        path:'users',
        component: UsuariosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
