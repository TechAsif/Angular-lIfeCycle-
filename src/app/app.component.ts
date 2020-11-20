import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';

  private _number:number = 100;

  set number(number:number){
    this._number = number;
  }

  get number(){
    return this._number;
  }

  increment(){
    this.number++;
    
  }

  decrement(){
    this.number--;
  }

}
