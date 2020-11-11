import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './';

@NgModule({
  declarations: [
    MascaraDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ],
  providers: [
    PtBrMatPaginatorIntl // como é a classe de serviço, será declarado em providers 
  ]
})
export class SharedModule { }
