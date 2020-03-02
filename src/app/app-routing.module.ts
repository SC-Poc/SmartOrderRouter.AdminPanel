import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LayoutsModule } from './layouts/layouts.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'order-books',
        loadChildren: () => import('./order-books/order-books.module').then(mod => mod.OrderBooksModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
      },
      {
        path: 'balances',
        loadChildren: () => import('./balances/balances.module').then(mod => mod.BalancesModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [LayoutsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
