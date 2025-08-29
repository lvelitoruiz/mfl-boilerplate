import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-original',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './original.html'
})
export class OriginalComponent {
  title = signal('angular-test');
}