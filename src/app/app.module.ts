import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxFinputModule } from 'ngx-finput';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFinputModule.forRoot({
      scale: 8,
      fixed: false,
      range: 'POSITIVE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
