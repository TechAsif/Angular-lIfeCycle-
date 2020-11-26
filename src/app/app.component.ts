import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';



  private _number:number = 100;
  private _number2:number = 200;

  user = {
    name:"asif"
  }

  constructor() { debugger; console.log("Parrent component constructor is called") }

  set number(number:number){
    this._number = number;
  }

  get number(){
    return this._number;
  }

  set number2(number:number){
    this._number2 = number;
  }

  get number2(){
    return this._number2;
  }


  increment(){
    this.number++;
    
  }

  decrement(){
    this.number--;
  }

  increment2(){
    this._number2++;
    
  }

  decrement2(){
    this._number2--;
  }

  changeName(){
    this.user.name="Parvez";
  }

}
