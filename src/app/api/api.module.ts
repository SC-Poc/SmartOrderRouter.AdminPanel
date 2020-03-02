import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancesService } from './services/balances.service';
import { HttpClientModule } from '@angular/common/http';
import { ExternalLimitOrdersService } from './services/external-limit-order.service';
import { MarketOrdersService } from './services/market-orders.service';
import { OrderBooksService } from './services/order-books.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BalancesService,
    ExternalLimitOrdersService,
    MarketOrdersService,
    OrderBooksService]
})
export class ApiModule { }
