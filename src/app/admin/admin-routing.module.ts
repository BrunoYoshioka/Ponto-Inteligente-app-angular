import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	AtualizacaoComponent,
	CadastroComponent, 
	ListagemComponent,
	AdminComponent
} from './components';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
		  {
			path: '', 
			component: ListagemComponent
		  },
		  {
			path: 'cadastro', 
			component: CadastroComponent 
		  },
		  {
			path: 'atualizacao/:lancamentoId', 
			component: AtualizacaoComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes) // será atribuido RouterModule pai que fica no app.component
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
