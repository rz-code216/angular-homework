import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calc',
  styleUrl: './calc.css',
  templateUrl: './calc.html',
})
export class Calc {
  num1 = signal(0);
  num2 = signal(0);
  res = signal<number | string>(0);
  option = signal('add');

  calculate() {
    const a = this.num1();
    const b = this.num2();

    switch (this.option()) {
      case 'add':
        this.res.set(a + b);
        break;
      case 'subtract':
        this.res.set(a - b);
        break;
      case 'multiply':
        this.res.set(a * b);
        break;
      case 'divide':
        this.res.set(b === 0 ? 'לא ניתן לחלק באפס' : a / b);
        break;
    }
  }
}
