import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class Extrato {
  @Input()
  transferencias: any[] = [];

  gravarExtrato(transferencia: any): void {
    this.transferencias.push(transferencia);
  }
}
