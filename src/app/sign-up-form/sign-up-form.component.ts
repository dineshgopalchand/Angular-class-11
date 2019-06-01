import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../common/validator/username-validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      UsernameValidator.cannotContainsSpace
    ],
      [UsernameValidator.checkUsernameOnServer]),
    name: new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required)
    }),
    password: new FormControl('', Validators.required)
  });

  constructor() {
    console.log(this.form);
  }

  ngOnInit() {
  }
  showValue() {
    console.log(this.form.get('username').value);
  }

  get userName() {
    return this.form.get('username');
  }
  get firstName() {
    return this.form.get('name.firstname');
  }
  get lastName() {
    return this.form.get('name.lastname');
  }
  get name() {
    return this.form.get('name');
  }
  formSubmit() {
    console.log(this.form.value);
    // to set custom error
    this.form.setErrors({
      netWorkConnection: true
    });
  }
}
