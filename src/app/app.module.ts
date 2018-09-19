import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Interceptor} from './core/interceptor';
import {AuthService} from './auth.service';
import {TokenStorage} from './core/token.storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ UserService, AuthService, TokenStorage, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
