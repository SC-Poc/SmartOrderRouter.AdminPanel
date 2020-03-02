import { Component, OnInit, OnDestroy } from '@angular/core';
import { BalanceList } from '../models/balance-list.interface';
import { AssetBalance } from '../models/asset-balance.interface';
import { BalancesService } from '../../api/services/balances.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  source: BalanceList;

  constructor(private balancesService: BalancesService) { }

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
    this.balancesService.get().subscribe(balances => {

      const assets = balances.map(balance => balance.Asset)
        .filter((value, index, self) => self.indexOf(value) === index);

      const exchanges = balances.map(balance => balance.Exchange)
        .filter((value, index, self) => self.indexOf(value) === index);

      const assetBalances: AssetBalance[] = [];

      assets.forEach(asset => {
        const assetBalance = {
          Asset: asset,
          Amounts: [],
          Total: 0
        };

        let total = 0;

        exchanges.forEach(exchange => {
          const balance = balances.filter((item, index, self) => item.Asset === asset && item.Exchange === exchange)[0];

          const amount = balance ? balance.Amount : 0;
          total += amount;
          assetBalance.Amounts.push(amount);
        });

        assetBalance.Total = total;

        assetBalances.push(assetBalance);
      });

      this.source = {
        Assets: assetBalances,
        Exchanges: exchanges
      };
    });
  }
}
