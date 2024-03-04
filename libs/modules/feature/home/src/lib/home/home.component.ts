import { Component } from '@angular/core';
import { RecommendedProductsService } from 'product-data-access';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private recommendedProductsService: RecommendedProductsService) {}

  products$ = this.recommendedProductsService.getProducts();
}
