import { TestBed } from '@angular/core/testing';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpErrorsInterceptor } from './http-errors.interceptor';

describe('HttpErrorsInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let matSnackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        HttpErrorsInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorsInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    matSnackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    const interceptor: HttpErrorsInterceptor = TestBed.inject(
      HttpErrorsInterceptor
    );
    expect(interceptor).toBeTruthy();
  });

  it('should open notification on http error', () => {
    jest.spyOn(matSnackBar, 'open');
    httpClient.get('/test').subscribe();

    const request = httpMock.expectOne('/test');
    request.error(new ProgressEvent('error'));

    expect(matSnackBar.open).toHaveBeenCalled();
    expect(request.request.headers.has('x-access-token')).toBe(true);
  });
});
