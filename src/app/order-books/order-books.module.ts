import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { OrderBooksRoutingModule } from './order-books-routing.module';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    OrderBooksRoutingModule,
    ApiModule
  ]
})
export class OrderBooksModule { }
