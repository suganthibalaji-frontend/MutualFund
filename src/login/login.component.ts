import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // @ts-ignore
  formGroup: FormGroup;

  get accountControl(): FormControl {
    return this.formGroup.get('account') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      account: [
        '',
        [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)],
      ],
      password: [
        '',
        [Validators.required], // Validators.minLength(8), Validators.maxLength(16)
      ],
    });
  }

  getErrorMessage(formControl: FormControl): string {
    let errorMessage: string = 'default';
    if (!formControl.errors || formControl.pristine) {
      errorMessage = 'pristine';
    } else if (formControl.errors.required) {
      errorMessage = 'required';
    } else if (formControl.errors.pattern) {
      errorMessage = 'pattern';
    }
    return errorMessage;
  }
  login(): void {
    localStorage.setItem('userIn', 'true');
    localStorage.setItem('userInfo', this.formGroup.value);
    this.router.navigate(['dashboard']);
  }
}
