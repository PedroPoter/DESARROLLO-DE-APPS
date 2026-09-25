import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular';

interface Operacion {
  num1: number;
  operador: string;
  num2: number;
  resultado: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

  num1: number | null = null;
  num2: number | null = null;
  operador = '+';
  resultado = 0;
  mensajeError = '';

  historial: Operacion[] = [];

  constructor() {
    const historialGuardado =
      localStorage.getItem('historialCalculadora');

    if (historialGuardado) {
      this.historial = JSON.parse(historialGuardado);
    }
  }

  operar(): void {
    this.mensajeError = '';

    if (this.num1 === null || this.num2 === null) {
      this.mensajeError =
        'Ingresa los dos números para realizar la operación.';
      return;
    }

    if (this.operador === '/' && this.num2 === 0) {
      this.mensajeError =
        'No se puede dividir entre cero.';
      return;
    }

    switch (this.operador) {

      case '+':
        this.resultado = this.num1 + this.num2;
        break;

      case '-':
        this.resultado = this.num1 - this.num2;
        break;

      case '*':
        this.resultado = this.num1 * this.num2;
        break;

      case '/':
        this.resultado = this.num1 / this.num2;
        break;

      default:
        this.mensajeError =
          'Selecciona un operador válido.';
        return;
    }

    this.historial.unshift({
      num1: this.num1,
      operador: this.operador,
      num2: this.num2,
      resultado: this.resultado
    });

    localStorage.setItem(
      'historialCalculadora',
      JSON.stringify(this.historial)
    );
  }

  limpiar(): void {
    this.num1 = null;
    this.num2 = null;
    this.operador = '+';
    this.resultado = 0;
    this.mensajeError = '';
  }
}