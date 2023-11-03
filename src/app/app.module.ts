import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ContactoComponent } from './component/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PrincipalComponent,
    ServiciosComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
