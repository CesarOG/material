import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _router: Router) {
    this.form = fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if (usuario === 'mcortega' && password === '123') {
      //Redirect dashboard
      this.fakeLogin();
    } else {
      //mostrar error
      this.error();
      this.form.reset();
    }
  }

  fakeLogin() {
    this.loading = true;
    setTimeout(() => {
      this._router.navigate(['dashboard']);
    }, 500);
  }

  error() {
    this._snackBar.open('usuario o contraseña ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
