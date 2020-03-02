import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketOrdersService } from 'src/app/api/services/market-orders.service';
import { MarketOrder } from 'src/app/api/models/market-orders/market-order.interface';
import { ExternalLimitOrder } from 'src/app/api/models/external-limit-orders/external-limit-order.interface';
import { ExternalLimitOrdersService } from 'src/app/api/services/external-limit-order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  private marketOrderId: string;

  marketOrder: MarketOrder;
  externalLimitOrders: ExternalLimitOrder[];

  constructor(
    private marketOrdersService: MarketOrdersService,
    private externalLimitOrdersService: ExternalLimitOrdersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.marketOrderId = this.route.snapshot.params.id;

    this.load();
  }

  load() {
    this.marketOrdersService.getById(this.marketOrderId)
      .subscribe(marketOrder => {
        this.marketOrder = marketOrder;
      });

    this.externalLimitOrdersService.getByMarketOrderId(this.marketOrderId)
      .subscribe(externalLimitOrders => {
        this.externalLimitOrders = externalLimitOrders;
      });
  }
}
