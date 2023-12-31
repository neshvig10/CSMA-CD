import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { Page0Component } from './page0/page0.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component'

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',component: Page0Component},
      {path: 'interference',component: Page1Component},
      {path: 'backoff',component: Page2Component},
      {path: 'minimumsize',component: Page3Component},
      {path: 'example',component: Page4Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
