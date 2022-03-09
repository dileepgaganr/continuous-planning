import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  openNav = new BehaviorSubject<boolean>(false);
  showNav = new BehaviorSubject<boolean>(true);

  constructor() { }
}
