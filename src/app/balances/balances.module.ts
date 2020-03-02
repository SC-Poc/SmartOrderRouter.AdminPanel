import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BalancesRoutingModule } from './balances-routing.module';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    BalancesRoutingModule,
    ApiModule
  ]
})
export class BalancesModule { }
