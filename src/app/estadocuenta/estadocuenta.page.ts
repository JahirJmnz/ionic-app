import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.page.html',
  styleUrls: ['./estadocuenta.page.scss'],
})
export class EstadocuentaPage  {

  constructor(private router: Router) {}

  irAFormulario() {
    this.router.navigateByUrl('formulario');
  }

  irAInicio() {
    this.router.navigateByUrl('inicio');
  }

  salir() {
    this.router.navigateByUrl('home');
  }

  estadoCuenta() {
    this.router.navigateByUrl('estadocuenta');
  }

}
