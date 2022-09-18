import { Component, VERSION } from '@angular/core';
import { BehaviorService } from './moduledata/behaviour.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  constructor(private _bs: BehaviorService) {
    this._bs.transferReturn().subscribe((res: any) => {
      console.log(res);
      this.data = res;
      // alert(res);
    });
  }
  money: any;
}
