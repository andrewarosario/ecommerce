import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mockProducts } from 'product-data-access';
import { ProductCardComponent } from 'product-ui';
import { LogDirective } from './log.directive';

@Component({
  selector: 'lib-host-component',
  template: `
    <lib-product-card libLog [product]="product"></lib-product-card>
  `,
})
class HostComponent {
  product = mockProducts[0];
}

describe('LogDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LogDirective, ProductCardComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should have cursor pointer', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const card: HTMLElement =
      fixture.nativeElement.querySelector('lib-product-card');
    expect(card.style.cursor).toBe('pointer');
  });
});
