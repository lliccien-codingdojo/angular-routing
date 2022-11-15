import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HouseComponent } from './pages/house/house.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    HouseComponent,
    ToolsComponent,
    ElectronicComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
