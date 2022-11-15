import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewComponent } from './pages/new/new.component';
import { OldComponent } from './pages/old/old.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'old',
        component: OldComponent
      },
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
