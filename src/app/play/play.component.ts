

import { Component, OnInit } from '@angular/core';
import { Game } from '../model/games.model';
import { Router } from '@angular/router';
import { GameServices } from '../service/game-service.service';




@Component({
 selector: 'app-play',
 templateUrl: './play.component.html',
 styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
 
   //  storing data from model to games variable


 games :Game[];
 amount:any;
 constructor(private router: Router , private gameService:GameServices) { }
 ngOnInit() {
  
  this.gameService.getGameDetails().subscribe(data=>{this.games=data});
  let mm=localStorage.getItem("amt");
  this.amount=mm.toString();

  // deducted 100 rupees for  
  this.amount=this.amount-100;
  console.log(this.amount);

 }



}
