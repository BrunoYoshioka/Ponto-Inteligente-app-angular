import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpUtilService {

  constructor() { }

  // método para retornar as configurações de header que precisamos para a API
  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();
	
  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}
    
    return { headers: httpHeaders };
  }

  obterIdUsuario(): string {
    // se obter dados os usuários não tiver token, retornará vazio
  	if (!localStorage['token']) {
  	  return '';
  	}
  	const dadosUsuario = this.obterDadosUsuario();
  	return dadosUsuario ? dadosUsuario.id : '';
  }

  obterIdEmpresa(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.empresaId : '';
  }

  // Método que irá descriptografar, ou traduzir aquela informação que esta em base64 para um formato legível de texto
  obterDadosUsuario() {
    if (!localStorage['token']) {
      return '';
    }
    // caso possua o token
    // Chama a função js chamada atob que recebe uma string no formato base 64 e retorna o valor em formato texto 
    return JSON.parse(atob(localStorage['token'].split('.')[1])); // pegar a segunda parte, pois essa parte da hash possui os dados que precisamos, como usuários da empresa etc.
  }

  obterPerfil(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.role : '';
  }

}
