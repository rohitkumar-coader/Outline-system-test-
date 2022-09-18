import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorService } from '../behaviour.service';
import { interval, take } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  data: any = {};

  constructor(
    private _bs: BehaviorService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this._bs.transferReturn().subscribe((res: any) => {
        console.log(res);
        this.data = res;
        // alert(res);
      });
    }, 50);
    setInterval(() => {
      this.data.money += 5;
    }, 60000);
  }

  sendMoneyJack() {
    this.data.money += 10;
  }
  getMoneyJack() {
    this.data.money -= 10;
  }
}
