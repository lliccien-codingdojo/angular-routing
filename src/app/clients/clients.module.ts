import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { NewComponent } from './pages/new/new.component';
import { OldComponent } from './pages/old/old.component';


@NgModule({
  declarations: [
    ClientsComponent,
    NewComponent,
    OldComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
