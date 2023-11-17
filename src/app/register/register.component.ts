import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registrationSuccessful: boolean = false;
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public get emailControl(): AbstractControl {
    return this.registerForm.get('email');
  }

  public get passwordControl(): AbstractControl {
    return this.registerForm.get('password');
  }

  public get isEmailInputFieldInvalid(): boolean {
    return  this.emailControl.hasError('email');
  }

  public get isPasswordInputFieldInvalid(): boolean {
    return this.passwordControl.hasError('minlength');
  }

  public get isRegisterFormReadyToSubmit(): boolean {
    return this.registerForm.dirty && this.registerForm.valid;
  }

  public onRegister(): void {
    this.registrationSuccessful = true;
  }
}
