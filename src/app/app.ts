import { Percentage } from './percentage/percentage';
import { Component, signal } from '@angular/core';
import { ToPercentage } from "./to-percentage/to-percentage";
import { IncDecPercentage } from './inc-dec-percentage/inc-dec-percentage';

@Component({
  selector: 'app-root',
  imports: [Percentage, ToPercentage, IncDecPercentage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calc-ngrx-signal');
}
