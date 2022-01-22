import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryRepository } from './domain/repository/CategoryRepository/Category.repository';
import { CategoryImplRepository } from './infra/repository/CategoryRepository/CategoryImpl.repository';
import { ProductRepository } from './domain/repository/ProductRepository/Product.repository';
import { ProductImplRepository } from './infra/repository/ProductRepository/ProductImpl.repository';
import { MockCategoryRepository } from './infra/repository/CategoryRepository/MockCategory.repository';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CategoryRepository, useClass: CategoryImplRepository },
    { provide: ProductRepository, useClass: ProductImplRepository },

    { provide: CategoryRepository, useClass: MockCategoryRepository },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
