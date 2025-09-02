import { Component, inject } from '@angular/core';
import { toPercentageCalcStore } from '../../model/percentage-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-percentage',
  imports: [FormsModule],
  templateUrl: './to-percentage.html',
  styleUrl: './to-percentage.scss',
  providers: [toPercentageCalcStore]
})
export class ToPercentage {
  readonly store = inject(toPercentageCalcStore);
}
