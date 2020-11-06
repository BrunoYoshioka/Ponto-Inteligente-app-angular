import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // responsável por disponibilizar o router-outlet directiva
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  CadastrarPjComponent,
  CadastroPjComponent
} from './components';

@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class CadastroPjModule { }
