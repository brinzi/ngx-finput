import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxFinputModule, Range } from '../../dist/ngx-finput/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFinputModule.forRoot({
      scale: 8,
      fixed: false,
      range: Range,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
