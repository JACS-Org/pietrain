import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: ()=>import('./public/public.module')
    .then(md=>md.PublicModule)
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module')
        .then(md=>md.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
