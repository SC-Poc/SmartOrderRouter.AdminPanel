import { OrderType } from '../order-type.enum';
import { ExternalLimitOrderStatus } from './external-limit-order-status.enum';

export interface ExternalLimitOrder {
    Id: string;
    Exchange: string;
    AssetPair: string;
    Price: number;
    Volume: number;
    Type: OrderType;
    ExecutedVolume: number;
    ExecutedPrice: number;
    Status: ExternalLimitOrderStatus;
    CreatedDate: Date;
}
