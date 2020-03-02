import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ExternalLimitOrder } from '../models/external-limit-orders/external-limit-order.interface';

@Injectable()
export class ExternalLimitOrdersService {
    constructor(private http: HttpClient) { }

    getByMarketOrderId(marketOrderId: string) {
        return this.http.get<ExternalLimitOrder[]>(`${environment.apiUrl}api/ExternalLimitOrders?marketOrderId=${marketOrderId}`);
    }
}
