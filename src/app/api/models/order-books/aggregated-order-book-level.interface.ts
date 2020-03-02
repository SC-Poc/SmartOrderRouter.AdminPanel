import { AggregatedOrderBookVolume } from './aggregated-order-book-volume.interface';

export interface AggregatedOrderBookLevel {
    Price: number;
    Volume: number;
    ExchangeVolumes: AggregatedOrderBookVolume[];
}
