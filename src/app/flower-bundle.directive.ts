import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFlowerBundle]'
})
export class FlowerBundleDirective 
{
  
  constructor() { }
  @Input('appFlowerBundle')gro:string='';

  @HostBinding('style.width')
  width:string='';

  @HostListener('mouseout') onFocus()
  {
    this.width=this.gro;
  }
  @HostListener('mouseover') onBlur()
  {
    this.width="220px";
  }

}
