import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierPlanningComponent } from './components/supplier-planning/supplier-planning.component';

const routes: Routes = [
  { path: '', component: SupplierPlanningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}
