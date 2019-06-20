import { Directive, ElementRef, Renderer2, Input, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[AutoHeight]'
})
export class AutoHeightDirective implements OnChanges {
  @Input('AutoHeight') AutoHeight: number = 0;
  timeoutFn;
  top: number;
  total: number;
  htmlElememt: HTMLElement;
  onceOnly: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.total = window.innerHeight;
    this.renderer.setStyle(this.htmlElememt, "padding-top", `0px`); 
    this.renderer.setStyle(this.htmlElememt, "max-height", `${this.total - this.top}px`);
    this.renderer.setStyle(this.htmlElememt, "min-height", `${this.total - this.top}px`);
    this.renderer.setStyle(this.htmlElememt, "overflow-y", "auto");
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges(changes) {
    this.AutoHeight = isNaN(Number(this.AutoHeight)) ? 0 : Number(this.AutoHeight);
  }


  ngAfterContentInit() {
    this.htmlElememt = this.element.nativeElement;
    let rect = this.htmlElememt.getBoundingClientRect();
    this.total = window.innerHeight - 1;
    if (rect.width == 0) {
      setTimeout(() => { this.ngAfterContentInit() }, 500);
      return;
    }
    this.top = Math.ceil(rect.top) + 65 + this.AutoHeight;
    this.renderer.setStyle(this.htmlElememt, "padding-top", `0px`);
    this.renderer.setStyle(this.htmlElememt, "max-height", `${this.total - this.top}px`);
    this.renderer.setStyle(this.htmlElememt, "min-height", `${this.total - this.top}px`);
    this.renderer.setStyle(this.htmlElememt, "overflow-y", "auto");
    setTimeout(() => {
      if (document.body.offsetHeight > window.innerHeight) {
        this.top = Math.ceil(rect.top) + 50 + ((this.AutoHeight) > 0 ? this.AutoHeight - 10 : this.AutoHeight) + (document.body.offsetHeight - window.innerHeight);
        this.renderer.setStyle(this.htmlElememt, "padding-top", `0px`);
        this.renderer.setStyle(this.htmlElememt, "max-height", `${this.total - this.top}px`);
        this.renderer.setStyle(this.htmlElememt, "min-height", `${this.total - this.top}px`);
        this.renderer.setStyle(this.htmlElememt, "overflow-y", "auto"); 
      } else {
        /*  let diff=window.innerHeight-document.body.offsetHeight;
            this.top=Math.ceil(rect.top)+65 + this.mpsAutoHeight -  diff ;
            this.renderer.setStyle(this.htmlElememt, "padding-top", `1px`);
            this.renderer.setStyle(this.htmlElememt, "max-height", `${this.total - this.top}px`);
            this.renderer.setStyle(this.htmlElememt, "min-height", `${this.total - this.top}px`);
            this.renderer.setStyle(this.htmlElememt, "overflow-y", "auto");
            */
      }
    }, 2000);
  }



}
