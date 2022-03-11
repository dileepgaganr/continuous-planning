import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-planning-sheet',
  templateUrl: './planning-sheet.component.html',
  styleUrls: ['./planning-sheet.component.scss']
})
export class PlanningSheetComponent implements OnInit {
  planningForm = new FormGroup({});
  height = 35;
  get plannedData(): FormArray {
    return this.planningForm.get("plannedData") as FormArray
  }
  constructor(public dialogRef: MatDialogRef<PlanningSheetComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.planningForm = this.fb.group({
      operators: new FormControl(null, Validators.required),
      helpers: new FormControl(null, Validators.required),
      workingHrs: new FormControl(null, Validators.required),
      isPercentage: new FormControl(null, Validators.required),
      plannedData: this.createPlanDataForm()
    });
  }

  saveData() {
  }

  // track(item: any, index: number): any {
  //   return index;
  // }

  private createPlanDataForm() {
    let planDataArr = new FormArray([]);
    for (let i = 1; i <= 60; i++) {
      planDataArr.push(new FormGroup({
        // day: new FormControl(`Day ${i}`),
        efficiency: new FormControl(null, [Validators.required]),
        qty: new FormControl(null, [Validators.required])
      }));
    }
    return planDataArr;
  }

}
