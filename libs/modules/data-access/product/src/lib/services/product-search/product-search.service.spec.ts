import { TestBed } from '@angular/core/testing';
import { mockProducts } from '../../mocks/product.mock';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../../models/product.model';
import { ProductSearchService } from './product-search.service';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products correctly', () => {
    // ARRANGE
    const mockName = 'notebook';
    const url = `${service.apiUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    // ACT
    service.searchByName(mockName).subscribe((products) => (result = products));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });

  it('should return product by id correctly', () => {
    // ARRANGE
    const mockId = '123';
    const url = `${service.apiUrl}/products/${mockId}`;
    let result!: Product;

    // ACT
    service.getById(mockId).subscribe((product) => (result = product));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockProducts[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts[0]);
  });
});
