import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderBooksService } from '../../api/services/order-books.service';
import { OrderBookLevel } from '../models/order-book-level.interface'
import { timer, Subscription } from 'rxjs';
import { AggregatedOrderBook } from 'src/app/api/models/order-books/aggregated-order-book.interface';
import { AggregatedOrderBookLevel } from 'src/app/api/models/order-books/aggregated-order-book-level.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  assetPair = 'BTCUSD';

  exchanges: string[];
  levels: OrderBookLevel[];

  constructor(private orderBooksService: OrderBooksService) { }

  ngOnInit(): void {
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
    this.orderBooksService.getAggregated(this.assetPair).subscribe(orderBook => {

      let exchanges = [];

      orderBook.SellLevels.forEach(level => {
        level.ExchangeVolumes.forEach(volume => { exchanges.push(volume.Exchange) });
      });

      orderBook.BuyLevels.forEach(level => {
        level.ExchangeVolumes.forEach(volume => { exchanges.push(volume.Exchange) });
      });

      exchanges = exchanges.filter((value, index, self) => self.indexOf(value) === index);

      const orderBookLevels = [...this.getLevels(orderBook.SellLevels, exchanges, true),
      ...this.getLevels(orderBook.BuyLevels, exchanges, false)];

      this.exchanges = exchanges;
      this.levels = orderBookLevels;
    });
  }

  getLevels(orderBookLevels: AggregatedOrderBookLevel[], exchanges: string[], isSell: boolean) {
    const levels: OrderBookLevel[] = [];

    orderBookLevels.sort((left, right) => (left.Price > right.Price ? -1 : 1))
      .forEach(level => {
        const orderBookLevel = {
          IsSell: isSell,
          Price: level.Price,
          Volume: level.Volume,
          Exchanges: []
        };

        exchanges.forEach(exchange => {
          const exchangeVolume = level.ExchangeVolumes.filter((item, index, self) => item.Exchange === exchange)[0];

          orderBookLevel.Exchanges.push({
            Exchange: exchange,
            Price: exchangeVolume ? exchangeVolume.Price : null,
            Volume: exchangeVolume ? exchangeVolume.Volume : null
          });
        });

        levels.push(orderBookLevel);
      });

    return levels;
  }
}
