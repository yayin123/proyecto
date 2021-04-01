import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/login/login.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { UsuarioRoutingModule } from './modules/usuarios/usuario-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    UsuariosModule,
    UsuarioRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
