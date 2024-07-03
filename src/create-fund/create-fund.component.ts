import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fund',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-fund.component.html',
  styleUrl: './create-fund.component.css',
})
export class CreateFundComponent {
  // @ts-ignore
  formGroup: FormGroup;

  get actionControl(): FormControl {
    return this.formGroup.get('action') as FormControl;
  }

  get schemeControl(): FormControl {
    return this.formGroup.get('scheme') as FormControl;
  }

  get navControl(): FormControl {
    return this.formGroup.get('nav') as FormControl;
  }
  get amountControl(): FormControl {
    return this.formGroup.get('amount') as FormControl;
  }
  get qtyControl(): FormControl {
    return this.formGroup.get('qty') as FormControl;
  }
  get agentControl(): FormControl {
    return this.formGroup.get('agent') as FormControl;
  }
  get sipControl(): FormControl {
    return this.formGroup.get('sip') as FormControl;
  }
  get folioControl(): FormControl {
    return this.formGroup.get('sip') as FormControl;
  }
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      action: ['', [Validators.required]],
      scheme: ['', [Validators.required]], // Validators.minLength(8), Validators.maxLength(16)
      nav: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      folio: ['', [Validators.required]],
      agent: ['', [Validators.required]],
      sip: ['', [Validators.required]],
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

  submit() {
    console.log(this.formGroup.value);
    localStorage.setItem('fund', this.formGroup.value);
    alert('submited successfully');
    this.router.navigate(['/', 'dashboard']);
  }
}
