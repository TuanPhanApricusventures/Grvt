export interface GetListCryptocurrenciesResponse {
    data: Cryptocurrency[];
    status: Status;
}

export interface GetSpecificCryptocurrenciesResponse {
    data: {
        [key: string]: Cryptocurrency;
    };
    status: Status;
}

export interface Cryptocurrency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    cmc_rank: number;
    num_market_pairs: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    infinite_supply: boolean;
    last_updated: string;
    date_added: string;
    tags: string[];
    platform: null;
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    quote: {
        USD: Quote;
        [currency: string]: Quote; // Allows for additional currencies
    };
}

export interface Quote {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    last_updated: string;
}

export interface Status {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
}

export interface ViewableItem {
    index: number;
    item: Cryptocurrency;
    key: string;
    isViewable: boolean;
}