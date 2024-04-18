import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: number = 0;
  sumCounter(sum: number) {
    this.counter += sum;
  }


  getCounter(): number { //Metot
    return this.counter;
  }

  setCounter(value: number) { //Metot
    return this.counter = value;
  }

  //getter ve setterlarda ayrı bir syntax var.
  get isCounterZero(): boolean {
    return this.counter === 0;
  }
  get isCounterPositive(): boolean {
    return this.counter > 0;
  }
  get isCounterNegative(): boolean {
    return this.counter < 0;
  }

}
