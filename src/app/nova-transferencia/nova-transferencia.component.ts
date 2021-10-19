import { Component } from '@angular/core';
import { TransferenciaService } from '../servives/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  title = 'Nova Transferência';
  valor!: number;
  destino!: number;

  constructor(private _transferenciaService: TransferenciaService) {}

  transferencia() {
    this._transferenciaService
      .adiciona({
        valor: this.valor,
        destino: this.destino,
      })
      .subscribe(() => {
        console.log('Transferência realizada com sucesso!');
        this._limparCampos();
      });
  }
  private _limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
