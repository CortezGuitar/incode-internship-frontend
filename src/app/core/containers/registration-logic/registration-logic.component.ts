import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { UserAuthModel } from '../../../shared/models/UserAuthModel';
import { RegistrAction, LoginState } from '../../@store';

@Component({
  selector: 'app-registration-logic',
  templateUrl: './registration-logic.component.html',
  styleUrls: ['./registration-logic.component.css']
})

export class RegistrationLogicComponent {
  constructor(private store: Store<LoginState>) {
  }

  saveUser(user: UserAuthModel): void {
    this.store.dispatch(new RegistrAction(user));
  }
}
