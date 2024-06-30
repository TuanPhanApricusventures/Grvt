import {
    GetListCryptocurrenciesResponse,
    GetSpecificCryptocurrenciesResponse,
} from "@constants/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";

const X_CMC_PRO_API_KEY = '27af4dd0-2898-46ad-8f46-ac603acfd0c9';

const config = {
    headers: {
        'X-CMC_PRO_API_KEY': X_CMC_PRO_API_KEY,
        accept: 'application/json'
    }
}

export const getAllListCryptocurrencies = createAsyncThunk(
    "getAllListCryptocurrencies",
    async () => {
        try {
            const res = await axios.get<GetListCryptocurrenciesResponse>(
                `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000`,
                config
            );
            return res.data.data;
        } catch (_e) {
            return []
        }
    },
)

export const getSpecificCryptocurrencies = createAsyncThunk(
    "getSpecificCryptocurrencies",
    async (arg, {getState}) => {
        const state = (getState() as RootState);
        const ids = state.listCryptocurrencies.visibleCryptocurrencyIds
        try {
            const res = await axios.get<GetSpecificCryptocurrenciesResponse>(
                `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${ids}`,
                config
            );
            return res.data.data;
        } catch (_e) {
            return {}
        }
    },
)