import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(protected formBuilder: FormBuilder,
              protected authService: AuthService) {
    console.info('Welcome to Login Page');
  }

  ngOnInit() {
    this.prepareReactiveForms();
  }

  get formControls() {
    return this.myForm.controls;
  }

  submit(): void {
    console.info('Login User, Please wait');
    this.authService.login(this.myForm.getRawValue());
  }

  private prepareReactiveForms() {
    this.myForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
