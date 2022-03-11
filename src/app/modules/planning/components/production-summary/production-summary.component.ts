import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-summary',
  templateUrl: './production-summary.component.html',
  styleUrls: ['./production-summary.component.scss']
})
export class ProductionSummaryComponent implements OnInit {
  totalColumns: string[] = ['tod', 'totalQty'];
  totalData = [];

  cumulativeColumns: string[] = ['orderId', 'producedQty', 'packedQty'];
  cumulativeData = [];

  constructor() { }

  ngOnInit(): void {
  }

}
