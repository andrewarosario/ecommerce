import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

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
  activatedRoute = inject(ActivatedRoute);
  // constructor(private activatedRoute: ActivatedRoute) {}
  id$ = getParamsId();
}
