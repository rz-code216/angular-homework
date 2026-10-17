import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './calc/calc';

@Component({
  imports: [RouterOutlet, Calc],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ang-2');
}
