import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCityComponent } from './game-city/game-city.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [

{path :'',component:GameCityComponent},
{ path: 'game-city', component: GameCityComponent },
{ path: 'play', component: PlayComponent }

];



@NgModule({

 imports: [RouterModule.forRoot(routes)],

 exports: [RouterModule]

})

export class AppRoutingModule { }

