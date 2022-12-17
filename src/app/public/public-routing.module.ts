import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      { 
        path: '', 
        component: InicioComponent
      },
      { 
        path: 'contacto', 
        component: ContactoComponent 
      },
      { 
        path: 'productos', 
        component: ProductosComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
