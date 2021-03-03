import { ModuleWithProviders, NgModule } from '@angular/core';
import { IOptions } from 'finput';
import { NgxFinputDirective } from './finput.directive';


@NgModule({
  declarations: [NgxFinputDirective],
  exports: [NgxFinputDirective]
})
export class NgxFinputModule {
  static forRoot(config: Partial<IOptions>): ModuleWithProviders {
    return {
      ngModule: NgxFinputModule,
      providers: [{
        provide: 'config',
        useValue: config
      }]
    };
  }
}
