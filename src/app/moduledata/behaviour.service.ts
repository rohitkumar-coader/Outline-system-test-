import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  public transfers: BehaviorSubject<object> = new BehaviorSubject<object>({
    name: 'Jack',
    money: 10,
    name1: 'Jill',
    money1: 15,
  });

  constructor() {}

  transferdata(data: any) {
    if (data) {
      this.transfers.next(data);
    }
  }
  transferReturn() {
    return this.transfers.asObservable();
  }
}
