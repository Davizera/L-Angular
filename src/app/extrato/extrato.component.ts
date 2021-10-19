import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia';
import { TransferenciaService } from '../servives/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];

  constructor(private _transferenciaService: TransferenciaService) {
    this.transferencias = new Array<Transferencia>();
  }

  ngOnInit(): void {
    this._transferenciaService.transferencias.subscribe(
      (transferencias) => (this.transferencias = transferencias)
    );
  }
}
