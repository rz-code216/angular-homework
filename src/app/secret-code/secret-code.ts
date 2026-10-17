import { Component, signal , computed} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-secret-code',
  styleUrl: './secret-code.css',
  templateUrl: './secret-code.html',
})
export class SecretCode 
{
  cipherType = signal('atbash');
  text = signal('');

  res = computed(() => {
    const text = this.text();
    const cipher = this.cipherType();

    if (!text) return '';

    switch (cipher) {
      case 'atbash':
        return this.doAtbash(text);
      case 'gematria':
        return this.doGematria(text).toString();
      case 'reverse':
        return this.doReverse(text);
      case 'caesar':
        return this.doCaesar(text);
      default:
        return text;
    }
  });

  // הצפנת אתב"ש (א' מתחלפת בת', ב' בש' וכו')
  private doAtbash(str: string): string {
    const alefBet = 'אבגדהוזחטיכלמנסעפצקרשת';
    const atbashBet = 'תשרקצפעסנמלכיטחזוהדגבא';

    return str
      .split('')
      .map(char => {
        const index = alefBet.indexOf(char);
        return index !== -1 ? atbashBet[index] : char;
      })
      .join('');
  }

  // חישוב גימטריה מספרית
  private doGematria(str: string): number {
    const values: Record<string, number> = {
      'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
      'י': 10, 'כ': 20, 'ך': 20, 'ל': 30, 'מ': 40, 'ם': 40, 'נ': 50, 'ן': 50,
      'ס': 60, 'ע': 70, 'פ': 80, 'ף': 80, 'צ': 90, 'ץ': 90, 'ק': 100, 'ר': 200,
      'ש': 300, 'ת': 400
    };

    return str
      .split('')
      .reduce((sum, char) => sum + (values[char] || 0), 0);
  }

  // היפוך סדר האותיות במילה
  private doReverse(str: string): string {
    return str.split('').reverse().join('');
  }

  // צופן קיסר (הזזת כל אות באות אחת קדימה באלפבית)
  private doCaesar(str: string): string {
    const alefBet = 'אבגדהוזחטיכלמנסעפצקרשת';

    return str
      .split('')
      .map(char => {
        const index = alefBet.indexOf(char);
        if (index === -1) return char;
        const nextIndex = (index + 1) % alefBet.length;
        return alefBet[nextIndex];
      })
      .join('');
  }
}