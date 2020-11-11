import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe } from './';

@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe
  ],
  providers: [
    PtBrMatPaginatorIntl // como é a classe de serviço, será declarado em providers 
  ]
})
export class SharedModule { }
