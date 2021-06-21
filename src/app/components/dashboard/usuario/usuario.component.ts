import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  ListaUsuario: Usuario[] = [];
  displayedColumns: string[] = [
    'UserName',
    'Nombre',
    'Apellido',
    'Sexo',
    'Accion',
  ];
  dataSource!: MatTableDataSource<any>;
  rompeclitoris = 'xD';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _usuarioService: UsuarioService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarUsuario() {
    this.ListaUsuario = this._usuarioService.listaUsuarios();
    this.dataSource = new MatTableDataSource(this.ListaUsuario);
  }

  eliminarUsuario(index: number) {
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuario();

    this._snackBar.open('Usuario eliminado correctamente.', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  verDetalle(index: number) {
    const user: Usuario = this._usuarioService.obtenerUsuario(index);
    const dialogRef = this.dialog.open(DetalleUsuarioComponent, {
      width: '350px',
      data: user,
    });
  }
}
