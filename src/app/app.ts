import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './calc/calc';
import { SecretCode } from './secret-code/secret-code';

@Component({
  imports: [RouterOutlet, Calc, SecretCode],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ang-2');
}
