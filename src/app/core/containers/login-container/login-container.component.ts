import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { LogInAction } from '../../@store/actions/auth.actions';
import { selectIsAuthenticated } from '../../@store/selectors/login.selectors';
import { UserAuthModel } from '../../../shared/models/UserAuthModel';
import { State } from '../../../@store/reducers';
import { Go } from '../../../@store/actions';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent {
  constructor(
    private store: Store<State>,
  ) {
    this.store.pipe(select(selectIsAuthenticated)).subscribe(
      (isLoaded: boolean) => {
        if (isLoaded) {
          this.store.dispatch(new Go({path: ['shop']}));
        }
      }
    );
  }

  onLogin(event: UserAuthModel): void {
    this.store.dispatch(new LogInAction(event));
  }
}
