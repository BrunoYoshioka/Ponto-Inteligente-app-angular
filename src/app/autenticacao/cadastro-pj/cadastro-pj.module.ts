import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // responsável por disponibilizar o router-outlet directiva
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { 
  CadastrarPjComponent,
  CadastroPjComponent
} from './components';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule, // Criação de campos de texto
    MatButtonModule, 
    MatListModule, // Layouts
    MatTooltipModule, 
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class CadastroPjModule { }
