import { Component } from '@angular/core';

// Este codigo no es mas que una simple class + un decorador

@Component({
  selector: 'app-counter',
  templateUrl: '../counter/counter.component.html',
  styleUrls: ['../counter/counter.component.scss']
})

export class CounterComponent {
  constructor(){}

  public counter: number = 0;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  decrementBy( value: number ):void {
    this.counter -= value;
  }

  resetCounter():void {
    this.counter = 0;
  }
}
