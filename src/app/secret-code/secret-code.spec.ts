import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecretCode } from './secret-code';

describe('SecretCode', () => {
  let component: SecretCode;
  let fixture: ComponentFixture<SecretCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretCode],
    }).compileComponents();

    fixture = TestBed.createComponent(SecretCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
