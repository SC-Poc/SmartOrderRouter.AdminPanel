import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MarketOrder } from '../models/market-orders/market-order.interface';
import { OrderType } from '../models/order-type.enum';

@Injectable()
export class MarketOrdersService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<MarketOrder[]>(`${environment.apiUrl}api/MarketOrders/`);
    }

    getById(marketOrderId: string) {
        return this.http.get<MarketOrder>(`${environment.apiUrl}api/MarketOrders/${marketOrderId}`);
    }

    create(assetPair: string, volume: number, type: OrderType) {
        return this.http.post(`${environment.apiUrl}api/MarketOrders/`, { AssetPair: assetPair, Volume: volume, Type: type });
    }
}
