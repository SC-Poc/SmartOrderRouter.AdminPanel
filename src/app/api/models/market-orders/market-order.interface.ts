import { MarketOrderStatus } from './market-order-status.enum';
import { OrderType } from '../order-type.enum';

export interface MarketOrder {
    Id: string;
    AssetPair: string;
    Type: OrderType;
    Volume: number;
    Status: MarketOrderStatus;
    CreatedDate: Date;
}
