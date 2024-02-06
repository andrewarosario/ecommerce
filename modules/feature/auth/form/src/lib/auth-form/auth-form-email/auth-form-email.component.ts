import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
})
export class AuthFormEmailComponent implements OnInit {
  control!: FormControl<string>;

  constructor(private authFormComponent: AuthFormComponent) {}

  ngOnInit(): void {
    this.control = this.authFormComponent.form.controls.email;
  }
}
