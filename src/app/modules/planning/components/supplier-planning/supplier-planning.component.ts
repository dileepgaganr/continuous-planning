import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { map, Observable, startWith } from 'rxjs';
import { PlanningSheetComponent } from '../planning-sheet/planning-sheet.component';

@Component({
  selector: 'app-supplier-planning',
  templateUrl: './supplier-planning.component.html',
  styleUrls: ['./supplier-planning.component.scss']
})
export class SupplierPlanningComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['1234', '1235', '1236'];
  filteredOptions: Observable<string[]> | any;


  constructor( public dialog: NgDialogAnimationService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  openPlanningSheet(){
    const dialogRef=this.dialog.open(PlanningSheetComponent,{
      width: '55%',
      disableClose: true,
      height: '100%',
      animation: {
        to: "left"
      },
      position: {
        top: '0',
        right: '0'
      }
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}