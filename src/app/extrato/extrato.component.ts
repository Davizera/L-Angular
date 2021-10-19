import { Component, Input } from '@angular/core';
import { TransferenciaServiceService } from '../servives/transferencia-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class Extrato {
  @Input()
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaServiceService) {
    this.transferencias = transferenciaService.transferencias;
  }
}
