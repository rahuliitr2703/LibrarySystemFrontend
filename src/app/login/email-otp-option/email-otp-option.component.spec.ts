import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOtpOptionComponent } from './email-otp-option.component';

describe('EmailOtpOptionComponent', () => {
  let component: EmailOtpOptionComponent;
  let fixture: ComponentFixture<EmailOtpOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailOtpOptionComponent]
    });
    fixture = TestBed.createComponent(EmailOtpOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
