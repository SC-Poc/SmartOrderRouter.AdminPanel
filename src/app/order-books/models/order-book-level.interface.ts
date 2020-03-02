import { ExchangeVolume } from './exchange-volume.interface';

export interface OrderBookLevel {
    IsSell: boolean;
    Price: number;
    Volume: number;
    Exchanges: ExchangeVolume[];
}
