import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSummaryComponent } from './production-summary.component';

describe('ProductionSummaryComponent', () => {
  let component: ProductionSummaryComponent;
  let fixture: ComponentFixture<ProductionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
