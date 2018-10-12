import { Component, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserAuthModel } from '../../../shared/models/UserAuthModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() saveUser: EventEmitter<UserAuthModel> = new EventEmitter<UserAuthModel>();

  registerFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  onSubmit(): void {
    this.saveUser.emit(this.registerFormGroup.value);
  }
}
