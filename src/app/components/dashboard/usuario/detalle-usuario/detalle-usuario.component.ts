import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/components/interfaces/usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css'],
})
export class DetalleUsuarioComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario) {}

  ngOnInit(): void {}
}
