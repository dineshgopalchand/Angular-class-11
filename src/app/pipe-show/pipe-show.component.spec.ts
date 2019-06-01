import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeShowComponent } from './pipe-show.component';

describe('PipeShowComponent', () => {
  let component: PipeShowComponent;
  let fixture: ComponentFixture<PipeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
