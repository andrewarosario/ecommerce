import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductSearchService } from 'product-data-access';
import { ProductCardComponent } from 'product-ui';
import { Observable, map, switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';

function getParamsId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatButtonModule,
    QuantityDescriptionPipe,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  constructor(private productSearchService: ProductSearchService) {}

  product$: Observable<Product> = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
