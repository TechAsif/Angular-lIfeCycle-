import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {

  @Input() passValue:number;
  @Input() passValue2:number;
  @Input() takeName:string;

  constructor() {debugger; console.log("child component constructor is called") }
 
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log("OnChanges Lifecycle method is called")
     console.log(`Current value : ${changes.passValue.currentValue} previousValue: ${changes.passValue.previousValue}`)
  }

  ngOnInit(): void {
    debugger;
    console.log("NgOnInit life cycle method is called in child component")
  }

  ngDoCheck(): void {
    debugger;
    console.log("Ng Do check is called")
    console.log(this.takeName)
  }

}
