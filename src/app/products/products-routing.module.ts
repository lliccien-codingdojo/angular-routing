import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { HouseComponent } from './pages/house/house.component';
import { ProductsComponent } from './pages/products/products.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'house',
        component: HouseComponent
      },
      {
        path: 'tools',
        component: ToolsComponent
      },
      {
        path: 'electronic',
        component: ElectronicComponent
      },
      {
        path: '',
        redirectTo: 'house',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
