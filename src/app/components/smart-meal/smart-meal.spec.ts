import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMeal } from './smart-meal';

describe('SmartMeal', () => {
  let component: SmartMeal;
  let fixture: ComponentFixture<SmartMeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartMeal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartMeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
