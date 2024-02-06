import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormEmailComponent } from './auth-form-email.component';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AuthFormEmailComponent,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [AuthFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);

    component.control.setValue('validemail@gmail.com');

    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should display required error message', () => {
    component.control.setValue('');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="error-required"]'
    );
    expect(errorMessage).toBeTruthy();
  });

  it('should display email error message', () => {
    component.control.setValue('invalidemail');
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '[data-testid="error-email"]'
    );
    expect(errorMessage).toBeTruthy();
  });
});
