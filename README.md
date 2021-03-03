# Ngx Finput

Angular wrapper for finput libary. http://scottlogic.github.io/finput/


### Usage

```Typescript
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
```
