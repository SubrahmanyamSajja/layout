import { Directive, Output, ElementRef, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[clickOutSide]' 
})
export class ClickOutSideDirective {
  @Output() public onClickOutSide = new EventEmitter();
  @Input() public clickOutSide:any;
  constructor(private _elementRef: ElementRef) {

  }
  

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) { 
    const clickedInside = this.childOf(targetElement,this._elementRef.nativeElement);
    this.onClickOutSide.emit(clickedInside);
  }
  childOf(c,p){
      let b=document.querySelector('body');
      let ans=false;
      while(c!=null && !ans && (c!=p || c!=b)){
          ans=c.innerHTML==p.innerHTML;
          c=c.parentNode;
      }
      return ans;
    }

}

