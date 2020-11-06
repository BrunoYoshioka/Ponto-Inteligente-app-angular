import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // responsável por disponibilizar o router-outlet directiva 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent, LogarComponent } from './components';

@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule, // Módulo responsavel por criar campos de entrada de dados
    MatButtonModule, // Módulo responsavel por criar os botões
    MatListModule, // ajudar a criar a interface no formato de lista ou de colunas
    MatTooltipModule, // Módulo que usamos para passar o mouse e exibir informação 
    MatIconModule, // Módulo que usamos para criar um icone formato de interrogação exibira mensagem de ajuda
    MatSnackBarModule, // Campo de alerta, sucesso, erro
    FlexLayoutModule // Tornar componentes responsivos
  ]
})
export class LoginModule { }
