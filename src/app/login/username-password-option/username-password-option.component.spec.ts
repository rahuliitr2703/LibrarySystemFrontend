import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePasswordOptionComponent } from './username-password-option.component';

describe('UsernamePasswordOptionComponent', () => {
  let component: UsernamePasswordOptionComponent;
  let fixture: ComponentFixture<UsernamePasswordOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernamePasswordOptionComponent]
    });
    fixture = TestBed.createComponent(UsernamePasswordOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
