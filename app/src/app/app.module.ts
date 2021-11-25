import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CodeRequestComponent } from './code-request/code-request.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoadingComponent } from './_shared/loading/loading.component';
import { PopupComponent } from './_shared/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AuthentificationComponent,
    LoadingComponent,
    CodeRequestComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
