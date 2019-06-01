import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormatter]'
})
export class InputFormatterDirective {
  constructor(private ele: ElementRef) { }
  @Input('appInputFormatter') format;
  @HostListener('keyup') onkeyup() {
    // console.log(this.format);
    const value = this.ele.nativeElement.value as string;
    // console.log(value);
    if (this.format === 'uppercase') {
      this.ele.nativeElement.value = value.toUpperCase();
    } else if (this.format === 'lowercase') {
      this.ele.nativeElement.value = value.toLowerCase();
    }
  }
  @HostListener('focus') onfocus() {
    (this.ele.nativeElement as HTMLInputElement).style.border = '2px green dotted';
  }
  @HostListener('blur') onBlur() {
    (this.ele.nativeElement as HTMLInputElement).style.border = '';
  }
}
