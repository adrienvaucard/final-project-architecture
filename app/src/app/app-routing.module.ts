import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthentificationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: '**',
    component: AuthentificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
