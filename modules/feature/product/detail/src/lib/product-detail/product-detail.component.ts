import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductSearchService } from 'product-data-access';
import { Observable, map, switchMap } from 'rxjs';

function getParamsId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  constructor(private productSearchService: ProductSearchService) {}

  product$: Observable<Product> = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
