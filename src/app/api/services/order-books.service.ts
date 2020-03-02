import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AggregatedOrderBook } from '../models/order-books/aggregated-order-book.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class OrderBooksService {
    constructor(private http: HttpClient) { }

    getAggregated(assetPair: string) {
        return this.http.get<AggregatedOrderBook>(`${environment.apiUrl}api/OrderBooks/aggregated/${assetPair}`);
    }
}
