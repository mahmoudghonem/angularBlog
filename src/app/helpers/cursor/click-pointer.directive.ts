import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[click]'
})
export class ClickPointerDirective {
  @HostBinding('style.cursor') cursor: string = 'pointer';

  constructor() { }

}
