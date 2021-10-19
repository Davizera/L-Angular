import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private _url = 'http://localhost:3000/transferencias';

  constructor(private _httpClient: HttpClient) {}

  get transferencias(): Observable<Transferencia[]> {
    return this._httpClient.get<Transferencia[]>(this._url);
  }

  public adiciona(transferencia: Transferencia): Observable<Transferencia> {
    transferencia.data = new Date();
    return this._httpClient.post<Transferencia>(this._url, transferencia);
  }
}
