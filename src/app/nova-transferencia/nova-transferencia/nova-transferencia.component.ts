import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferencia {
  title = 'Nova Tranferencia';

  transferencia() {
    console.log('uma nova transferencia foi solicitada!');
  }
}
