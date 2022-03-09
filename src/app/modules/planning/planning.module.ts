import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningRoutingModule } from './planning-routing';
import { SharedModule } from '@shared/shared.module';
import { SupplierPlanningComponent } from './components/supplier-planning/supplier-planning.component';
import { DailyStatusComponent } from './components/daily-status/daily-status.component';

@NgModule({
  imports: [CommonModule,
    PlanningRoutingModule,
    SharedModule],
  declarations: [SupplierPlanningComponent, DailyStatusComponent],
})
export class PlanningModule { }
