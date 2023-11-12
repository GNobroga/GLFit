import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './pages/sign/sign.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AccountRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [SignComponent, RegisterComponent, AccountComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    }
  ]
})
export class AccountModule {}
