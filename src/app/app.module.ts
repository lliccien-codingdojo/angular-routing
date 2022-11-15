import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChieldComponent } from './pages/chield/chield.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
