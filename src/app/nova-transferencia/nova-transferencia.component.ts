import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferencia {
  title = 'Nova Tranferencia';
  valor!: number;
  destino!: number;
  @Output()
  aoTransferir = new EventEmitter<any>();

  transferencia() {
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
  }
}
