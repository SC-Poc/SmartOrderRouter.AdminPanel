import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Balance } from '../models/balances/balance.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class BalancesService {
    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<Balance[]>(`${environment.apiUrl}api/balances`);
    }
}
