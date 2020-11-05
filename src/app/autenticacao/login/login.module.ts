import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // responsável por disponibilizar o router-outlet directiva 

import { LoginComponent, LogarComponent } from './components';

@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
