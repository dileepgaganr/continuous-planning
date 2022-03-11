import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningSheetComponent } from './planning-sheet.component';

describe('PlanningSheetComponent', () => {
  let component: PlanningSheetComponent;
  let fixture: ComponentFixture<PlanningSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
