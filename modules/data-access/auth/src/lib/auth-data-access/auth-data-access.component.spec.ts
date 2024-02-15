import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthDataAccessComponent } from './auth-data-access.component';

describe('AuthDataAccessComponent', () => {
  let component: AuthDataAccessComponent;
  let fixture: ComponentFixture<AuthDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
