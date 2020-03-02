import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ApiModule } from '../api/api.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, OrderDetailsComponent, OrderCreateComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ApiModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
