import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormflightComponent } from './formflight.component';

describe('FormflightComponent', () => {
  let component: FormflightComponent;
  let fixture: ComponentFixture<FormflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
