import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import { ProductSearchService } from 'product-data-access';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      // COLOCAR OS OPERADORES!
      debounceTime(400),
      distinctUntilChanged(),
      filter((value) => value.length > 0),
      switchMap((value) => this.productSearchService.searchByName(value))
      // map((value) => `VALOR TRANSFORMADO: ${value}`)
    );
  }
}
