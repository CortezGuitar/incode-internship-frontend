import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { LogOutAction } from '../@store/actions/auth.actions';
import { State } from '../../@store/reducers';

@Injectable()
export class ClientErrorInterceptor implements HttpInterceptor {
    constructor(private store: Store<State>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
        .pipe(
            tap((event: HttpEvent<any>) => {
                //
            }),
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
                    localStorage.clear();
                    this.store.dispatch(new LogOutAction());
                }

                return of(error);
            })
        );
    }
}
