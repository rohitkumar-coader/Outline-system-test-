import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { BehaviorService } from '../../behaviour.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  data: any = [];
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
  }
  @Output() childEvent = new EventEmitter();

  getMoney() {
    this.data.money1 += 5;
  }
  sendMoneyJill() {
    this.data.money1 += 10;
  }
  getMoneyJill() {
    this.data.money1 -= 10;
  }
}
