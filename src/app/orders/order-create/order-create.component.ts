import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderType } from 'src/app/api/models/order-type.enum';
import { MarketOrdersService } from 'src/app/api/services/market-orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  private marketOrderFormProps = {
    Volume: 'Volume',
    Type: 'Type'
  };

  assetPair = 'BTCUSD';

  isSaving: boolean;

  types = [OrderType.Buy, OrderType.Sell];

  marketOrderForm = this.fb.group({
    [this.marketOrderFormProps.Volume]: [0, [Validators.required, Validators.min(0), Validators.max(2147483647)]],
    [this.marketOrderFormProps.Type]: [null, [Validators.required]]
  });

  constructor(
    private marketOrdersService: MarketOrdersService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSaving = true;

    const values = this.marketOrderForm.getRawValue();

    this.marketOrdersService.create(this.assetPair, values[this.marketOrderFormProps.Volume], values[this.marketOrderFormProps.Type])
    .subscribe(
      response => {
        this.router.navigate(['/orders']);
      },
      (error) => {
        alert('Something went wrong. Please try again');
        console.log(error);
        this.isSaving = false;
      }
    );
  }
}
