import { AssetBalance } from "./asset-balance.interface";

export interface BalanceList {
    Exchanges: string[];
    Assets: AssetBalance[];
}
