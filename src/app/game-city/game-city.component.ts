import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

 gameForm: FormGroup;
 submitted: boolean = false;
 amt:any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.gameForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.pattern("[A-Z][a-z]{6,10}")]],
      address:['',Validators.required]
  
    
     });
  }
  amount= new FormControl('');
 // submit data
 


 submit(){
  this.submitted = true;
if(this.gameForm.invalid){

return;

  }

 localStorage.setItem("amt",this.amount.value);
 console.log(this.amt);
  this.router.navigate(['play']);
 }

 getAmount(){
  localStorage.setItem("amt",this.amount.value);
 }

}
