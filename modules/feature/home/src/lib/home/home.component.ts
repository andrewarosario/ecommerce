import { Component } from '@angular/core';
import { mockProducts } from 'product-data-access';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products = mockProducts;
}
