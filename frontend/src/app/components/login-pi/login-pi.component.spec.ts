import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPiComponent } from './login-pi.component';

describe('LoginPiComponent', () => {
  let component: LoginPiComponent;
  let fixture: ComponentFixture<LoginPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
