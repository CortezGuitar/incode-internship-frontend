import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { LogInAction } from '../../@store/actions/login.actions';
import { selectIsAuthenticated } from '../../@store/selectors/login.selectors';
import { UserAuthModel } from '../../../shared/models/UserAuthModel';
import { State } from '../../../@store/reducers';
import { Go } from '../../../@store/actions';
import { ShowMessage } from '../../@store/actions';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
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

  ngOnInit(): void {
    this.store.dispatch(new ShowMessage('Hello!'));
  }
}
