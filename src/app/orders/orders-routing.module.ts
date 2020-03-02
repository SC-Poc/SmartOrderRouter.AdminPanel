import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderCreateComponent } from './order-create/order-create.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'order-details/:id',
        component: OrderDetailsComponent
    },
    {
        path: 'create',
        component: OrderCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
