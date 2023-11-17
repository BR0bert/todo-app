import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    })
  }

  public get emailControl(): AbstractControl {
    return this.loginForm.get('email');
  }

  public get isEmailInputFieldInvalid(): boolean {
    return  this.emailControl.hasError('email');
  }

  public get isLoginFormReadyToSubmit(): boolean {
    return this.loginForm.dirty && this.loginForm.valid;
  }

}
