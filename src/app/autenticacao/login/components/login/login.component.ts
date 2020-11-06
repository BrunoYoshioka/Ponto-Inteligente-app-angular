import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // componentes relacionados ao formulário
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    //private router: Router
  ) { }

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
      this.snackBar.open(
        "Dados Inválidos", "Erro", { duration: 5000 });
      return;
    }
    alert(JSON.stringify(this.form.value));
  }

}
