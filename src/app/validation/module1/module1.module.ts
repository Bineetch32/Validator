import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpValidationComponent } from './emp-validation/emp-validation.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpValidationComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports: [EmpValidationComponent,]
})
export class Module1Module { }
