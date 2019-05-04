import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vevok',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'termekek', loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'vizsgalatok', loadChildren: './inspections/inspections.module#InspectionsModule'
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
