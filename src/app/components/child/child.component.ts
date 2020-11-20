import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() passValue:number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges Lifecycle method is called")
    console.log(`Current value : ${changes.passValue.currentValue} previousValue: ${changes.passValue.previousValue}`)
  }

  ngOnInit(): void {
    console.log("NgOnInit life cycle method is called in child component")
  }

}
