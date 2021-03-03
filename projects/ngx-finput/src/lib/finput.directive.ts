import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { IOptions } from 'finput';
import * as finput from 'finput/dist/finput';

@Directive({
  selector: '[ngxFinput]'
})
export class NgxFinputDirective implements OnInit, OnDestroy {

  @Input() options: IOptions;

  destroyRef;
  constructor(
    @Inject('config') public config: IOptions,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.destroyRef = finput(this.elRef.nativeElement, {
      ...this.config,
      ...this.options
    });
  }

  ngOnDestroy() {
    this.destroyRef();
  }

}
