import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from 'product-ui';

@Directive({
  selector: '[libLog]',
  standalone: true,
})
export class LogDirective implements OnInit {
  @Output() doubleClick = new EventEmitter<void>();

  router = inject(Router);
  productCardComponent = inject(ProductCardComponent);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click', ['$event'])
  onClick(): void {
    this.router.navigate(['product', this.productCardComponent.product.id]);
  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick(): void {
    this.doubleClick.emit();
  }
}
