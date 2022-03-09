import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: () => import('@planning/planning.module').then(m => m.PlanningModule) }

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
