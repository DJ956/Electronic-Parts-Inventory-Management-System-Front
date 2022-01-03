import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistryProductPageRoutingModule } from './registry-product-routing.module';

import { RegistryProductPage } from './registry-product.page';
import { ComponentsModule } from '../share/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistryProductPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegistryProductPage]
})
export class RegistryProductPageModule { }
