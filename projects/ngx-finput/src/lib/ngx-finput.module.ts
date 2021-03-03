import { ModuleWithProviders, NgModule } from '@angular/core';
import { IOptions } from './types';
import { NgxFinputDirective } from './finput.directive';


@NgModule({
  declarations: [NgxFinputDirective],
  exports: [NgxFinputDirective]
})
export class NgxFinputModule {
  static forRoot(config: Partial<IOptions>): ModuleWithProviders<NgxFinputModule> {
    return {
      ngModule: NgxFinputModule,
      providers: [{
        provide: 'config',
        useValue: config
      }]
    };
  }
}
