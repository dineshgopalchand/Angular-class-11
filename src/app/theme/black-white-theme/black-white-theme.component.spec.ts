import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhiteThemeComponent } from './black-white-theme.component';

describe('BlackWhiteThemeComponent', () => {
  let component: BlackWhiteThemeComponent;
  let fixture: ComponentFixture<BlackWhiteThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackWhiteThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhiteThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
