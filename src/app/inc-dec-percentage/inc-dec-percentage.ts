import { Component, inject } from '@angular/core';
import { incDecPercentageStore } from '../../model/percentage-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inc-dec-percentage',
  imports: [FormsModule],
  templateUrl: './inc-dec-percentage.html',
  styleUrl: './inc-dec-percentage.scss',
  providers: [incDecPercentageStore]
})
export class IncDecPercentage {
  readonly store = inject(incDecPercentageStore);
}
