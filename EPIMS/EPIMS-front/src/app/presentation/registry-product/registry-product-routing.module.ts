import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistryProductPage } from './registry-product.page';

const routes: Routes = [
  {
    path: '',
    component: RegistryProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistryProductPageRoutingModule {}
