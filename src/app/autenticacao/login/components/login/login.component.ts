import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // componentes relacionados ao formulário
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; // FormGroup faz agrupamento de componentes no caso de login tem login e de senha, e faz mapeamento com formulario html

  constructor(
    private fb: FormBuilder, // ajuda a criar e mapear o formulário
    private snackBar: MatSnackBar, // mensagem de erro ou sucesso
    private router: Router,
    private loginService: LoginService) { }

  // método para executar logo na sequencia que construtor cria o objeto
  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({ // dentro do group passará objeto Json com toda configuração do formulario
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Ação logar
  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value; // método tipo cont pq ele não mudará mais, obter os dados do formulário
    this.loginService.logar(login)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1]));
          console.log(JSON.stringify(usuarioData));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            alert('Deve direcionar para a página de admin');
            //this.router.navigate(['/admin']);
          } else {
            alert('Deve direcionar para a página de funcionário');
            //this.router.navigate(['/funcionario']);
          }
        },
        err => {
          console.log(JSON.stringify(err));
          let msg: string = "Tente novamente em instantes.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

}
