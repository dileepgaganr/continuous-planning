import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navigationList = [{ route: '', name: 'Production Daily status', icon: '', children: '' }]

  constructor() { }

  ngOnInit() {
  }

}