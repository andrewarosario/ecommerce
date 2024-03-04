import { Component } from '@angular/core';
import { CartService } from 'product-data-access';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';

  constructor(public cartService: CartService) {}
}
