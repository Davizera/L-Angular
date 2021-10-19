import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia';
import { TransferenciaService } from './servives/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService: TransferenciaService) {}

  transferir(event: Transferencia): void {
    this.transferenciaService.adiciona(event);
  }
}
