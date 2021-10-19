import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaServiceService {
  private _transferencias: any[] = [];

  get transferencias(): any[] {
    return this._transferencias;
  }

  constructor() {}

  public adiciona(transferencia: any): void {
    this.sanitizar(transferencia);
    this._transferencias.push(transferencia);
  }

  private sanitizar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
