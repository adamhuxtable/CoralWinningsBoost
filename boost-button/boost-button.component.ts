import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boost-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boost-button.component.html',
  styleUrls: ['./boost-button.component.scss'],
})
export class BoostButtonComponent {
  @Input() percentage = 25;

  isBoosted = false;

  onBoost(): void {
    if (this.isBoosted) return;
    this.isBoosted = true;
  }
}
