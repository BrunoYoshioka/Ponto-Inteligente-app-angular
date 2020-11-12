import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'; // para ter acesso a baseUrl da API

import { Lancamento } from '../models';
import { HttpUtilService } from './http-util.service';

@Injectable()
export class LancamentoService {

  // constantes no js
  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(
  	private http: HttpClient, // responsável por fazer acesso a API
  	private httpUtil: HttpUtilService) { }

  buscarUltimoTipoLancado(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_ULTIMO_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
  	return this.http.post(
  	  	env.baseApiUrl + this.PATH, 
  	  	lancamento,
  	  	this.httpUtil.headers()
  	);
  }
  
  listarTodosLancamentos(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_TODOS_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }

  listarLancamentosPorFuncionario(
    // Receberá quatro parametros
    funcionarioId: string,
    pagina: number,
    ordem: string,
    direcao: string /*asc, desc... */): Observable<any> {

    // gerar a URL
    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_LANCAMENTOS.replace('{funcionarioId}', funcionarioId);
    
    const params: string = '?pag=' + pagina +
      '&ord=' + ordem + '&dir=' + direcao;
    
    return this.http.get(url + params, this.httpUtil.headers());
  }

  remover(lancamentoId: string): Observable<any> {
    return this.http.delete(
        env.baseApiUrl + this.PATH + '/' + lancamentoId,
        this.httpUtil.headers()
    );
  }
  
}
