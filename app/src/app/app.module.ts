import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PopupComponent } from './components/popup/popup.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultsComponent } from './components/results/results.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthenticationService } from './services/authentication.service';
import { GameService } from "./services/game.service";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AuthentificationComponent,
    LoadingComponent,
    RegisterComponent,
    DefaultLayoutComponent,
    HomeComponent,
    GameComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    GameService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
