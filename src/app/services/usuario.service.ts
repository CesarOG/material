import { Injectable } from '@angular/core';
import { Usuario } from '../components/interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  ListUsuario: Usuario[] = [
    {
      UserName: 'cortega',
      Nombre: 'César',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'lortega',
      Nombre: 'Luis',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'sortega',
      Nombre: 'Sonia',
      Apellido: 'Ortega',
      Sexo: 'Femenino',
    },
    {
      UserName: 'vortega',
      Nombre: 'Victor',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'jortega',
      Nombre: 'Judith',
      Apellido: 'Ortega',
      Sexo: 'Femenino',
    },
    {
      UserName: 'kortega',
      Nombre: 'Kenneth',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'mortega',
      Nombre: 'Marcelo',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'fortega',
      Nombre: 'Felix',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
    {
      UserName: 'yortega',
      Nombre: 'Yolanda',
      Apellido: 'Ortega',
      Sexo: 'Femenino',
    },
    {
      UserName: 'jortega',
      Nombre: 'Joaquin',
      Apellido: 'Ortega',
      Sexo: 'Masculino',
    },
  ];
  constructor() {}

  listaUsuarios() {
    return this.ListUsuario.slice();
  }
  eliminarUsuario(index: number) {
    this.ListUsuario.splice(index, 1);
  }
  registrarUsuario(usuario: Usuario) {
    this.ListUsuario.unshift(usuario);
  }
  obtenerUsuario(index: number) {
    return this.ListUsuario[index];
  }
  actualizarUsuario(usuario: Usuario, index: number) {
    this.ListUsuario[index] = usuario;
  }
}
