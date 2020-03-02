import { AggregatedOrderBookLevel } from './aggregated-order-book-level.interface';

export interface AggregatedOrderBook {
    AssetPair: string;
    Timestamp: Date;
    SellLevels: AggregatedOrderBookLevel[];
    BuyLevels: AggregatedOrderBookLevel[];
}
