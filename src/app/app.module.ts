import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuledataModule } from './moduledata/moduledata.module';
import { ParentComponent } from './moduledata/parent/parent.component';
import { ChildComponent } from './moduledata/parent/child/child.component';
import { BehaviorService } from './moduledata/behaviour.service';
export let AppInjector: Injector;
@NgModule({
  imports: [BrowserModule, FormsModule, ModuledataModule],
  declarations: [AppComponent, HelloComponent, ParentComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [BehaviorService],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
