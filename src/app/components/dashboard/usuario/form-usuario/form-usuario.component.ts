import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/components/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent implements OnInit {
  paramId = this.route.snapshot.paramMap.get('id');
  titulo: string = 'Registrar Usuario';
  bActualizar: boolean = false;
  user: Usuario = { UserName: '', Nombre: '', Apellido: '', Sexo: '' };
  form: FormGroup;
  listSexo: string[] = ['Masculino', 'Femenino'];
  constructor(
    private fb: FormBuilder,
    private _userService: UsuarioService,
    private location: Location,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  procesar() {
    this.user = {
      UserName: this.form.value.usuario,
      Nombre: this.form.value.nombre,
      Apellido: this.form.value.apellido,
      Sexo: this.form.value.sexo,
    };
    if (this.bActualizar) {
      this._userService.actualizarUsuario(this.user, Number(this.paramId));
    } else {
      this._userService.registrarUsuario(this.user);
    }
    this.retornar();
    this._snackBar.open('Usuario procesado correctamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  retornar(): void {
    this.location.back();
  }
  obtenerUsuario(): void {
    //Validamos si es null es que es un registrar
    if (this.paramId !== null) {
      this.titulo = 'Actualizar Usuario';
      this.bActualizar = true;
      const idUsuario = Number(this.paramId);
      this.user = this._userService.obtenerUsuario(idUsuario);
      this.form.controls.usuario.setValue(this.user.UserName);
      this.form.controls.nombre.setValue(this.user.Nombre);
      this.form.controls.apellido.setValue(this.user.Apellido);
      this.form.controls.sexo.setValue(this.user.Sexo);
    }
  }
}
