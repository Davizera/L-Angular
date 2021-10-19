import { Component } from '@angular/core';
import { TransferenciaServiceService } from './servives/transferencia-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private transferenciaService: TransferenciaServiceService) {}

  transferir(event: any) {
    this.transferenciaService.adiciona(event);
  }
}
