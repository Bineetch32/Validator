import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpValidationComponent } from './emp-validation.component';

describe('EmpValidationComponent', () => {
  let component: EmpValidationComponent;
  let fixture: ComponentFixture<EmpValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
