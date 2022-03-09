import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily-status',
  templateUrl: './daily-status.component.html',
  styleUrls: ['./daily-status.component.scss']
})
export class DailyStatusComponent implements OnInit {

  dailyStatusForm= new FormGroup({});

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  
  initForm(){
    this.dailyStatusForm=this.fb.group({
      outputQty: new FormControl('', Validators.required),
      operators: new FormControl('', Validators.required),
      helpers: new FormControl('', Validators.required),
      workingHrs: new FormControl('', Validators.required),
      packedQty: new FormControl('', Validators.required)
    })
  }

  saveData(){
    
  }

}