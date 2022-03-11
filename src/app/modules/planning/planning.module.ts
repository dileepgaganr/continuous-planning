import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningRoutingModule } from './planning-routing';
import { SharedModule } from '@shared/shared.module';
import { SupplierPlanningComponent } from './components/supplier-planning/supplier-planning.component';
import { DailyStatusComponent } from './components/daily-status/daily-status.component';
import { PlanningSheetComponent } from './components/planning-sheet/planning-sheet.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { ProductionSummaryComponent } from './components/production-summary/production-summary.component';

@NgModule({
  imports: [CommonModule,
    PlanningRoutingModule,
    SharedModule],
  declarations: [SupplierPlanningComponent, DailyStatusComponent, PlanningSheetComponent, ProductionSummaryComponent],
  providers: [NgDialogAnimationService]
})
export class PlanningModule { }
