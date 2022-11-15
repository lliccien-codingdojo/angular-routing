import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChieldComponent } from './pages/chield/chield.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      // {
      //   path: '',
      //   component: ParentComponent
      // },
      {
        path: 'child',
        component: ChieldComponent
      },
      {
        path: '',
        redirectTo: 'child',
        pathMatch: 'full'
      },

      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  {
    path: 'products',
    loadChildren: () => ProductsModule
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
