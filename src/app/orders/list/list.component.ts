import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarketOrdersService } from 'src/app/api/services/market-orders.service';
import { timer, Subscription } from 'rxjs';
import { MarketOrder } from 'src/app/api/models/market-orders/market-order.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  orders: MarketOrder[];

  constructor(private marketOrdersService: MarketOrdersService) { }

  ngOnInit() {
    this.subscription = timer(0, 5000)
      .subscribe(() => {
        this.load();
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  load() {
    this.marketOrdersService.getAll().subscribe(orders => {
      this.orders = orders.sort((left, right) => (left.CreatedDate > right.CreatedDate ? -1 : 1));
    });
  }
}
