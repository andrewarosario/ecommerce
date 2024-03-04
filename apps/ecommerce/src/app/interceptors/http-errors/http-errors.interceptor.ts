import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private matSnackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      setHeaders: {
        'x-access-token': 'MEU_TOKEN',
      },
    });

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        this.matSnackBar.open('Ops, houve um erro', 'Fechar', {
          duration: 5000,
        });
        return throwError(() => error); // PASSA O ERRO PRA FRENTE
      })
    );
  }
}
