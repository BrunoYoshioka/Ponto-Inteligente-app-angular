import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/'; // Para fazer a busca ou acesso a API externa de modo assíncrono
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Login } from '../';

@Injectable()
export class LoginService {

  private readonly PATH: string = 'auth'; // essa url que deve fazer um post como email e senha para obter o token de acesso

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, login);
  }

}
