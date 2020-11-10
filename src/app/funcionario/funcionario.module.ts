import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // router-outlet
import { FlexLayoutModule } from '@angular/flex-layout'; // possui centralização de componentes

import { ListagemComponent, LancamentoComponent, FuncionarioComponent } from './components';

@NgModule({
  declarations: [
    ListagemComponent, 
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FuncionarioModule { }
