import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LayoutComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule, 
    PublicRoutingModule, 
    SharedModule,
  ],
})
export class PublicModule {}
