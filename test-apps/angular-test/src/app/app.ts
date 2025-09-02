import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTestComponent } from './component-test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentTestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
