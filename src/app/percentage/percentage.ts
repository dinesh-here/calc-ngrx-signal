import { Component, inject } from '@angular/core';
import { percentageStore } from '../../model/percentage-store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-percentage',
  imports: [FormsModule],
  templateUrl: './percentage.html',
  styleUrl: './percentage.scss',
  providers: [percentageStore]
})
export class Percentage {
  readonly store = inject(percentageStore);
}
