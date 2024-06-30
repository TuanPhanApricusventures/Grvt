import {
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cryptocurrency, ViewableItem } from "@constants/types";
import { getAllListCryptocurrencies, getSpecificCryptocurrencies } from "src/services/api";

const limit = 50;

export interface State {
  listCryptocurrencies: Cryptocurrency[];
  showCryptocurrencies: Cryptocurrency[];
  filteredCryptocurrencies: Cryptocurrency[];
  visibleCryptocurrencyIds: string;
  start: number;
}

const initialState: State = {
  listCryptocurrencies: [],
  showCryptocurrencies: [],
  filteredCryptocurrencies: [],
  visibleCryptocurrencyIds: '',
  start: 0
};

const listCryptocurrenciesSlice = createSlice({
  name: "listCryptocurrencies",
  initialState,
  reducers: {
    setVisibleCryptocurrencies: (state, action: PayloadAction<ViewableItem[]>) => {
      const data = action.payload.map(ele => ele.item.id);
      state.visibleCryptocurrencyIds = data.join(',');
    },
    loadMoreCryptocurrencies: (state) => {
      const endIndex = Math.min(state.start + limit, state.listCryptocurrencies.length);
      const data = state.listCryptocurrencies.slice(state.start, endIndex)
      state.showCryptocurrencies = state.showCryptocurrencies.concat(data);
      state.start = state.start + limit;
    },
    searchCryptocurrencies: (state, action: PayloadAction<string>) => {
      const searchKey = action.payload.toLocaleLowerCase();
      const data = searchKey ? state.showCryptocurrencies.filter((obj) =>
        obj.name.toLocaleLowerCase().includes(searchKey) ||
        obj.symbol.toLocaleLowerCase().includes(searchKey),
      ) : []
      state.filteredCryptocurrencies = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllListCryptocurrencies.fulfilled, (state, action) => {
      state.listCryptocurrencies = action.payload;
      state.showCryptocurrencies = action.payload.slice(0, limit);
    });
    builder.addCase(getSpecificCryptocurrencies.fulfilled, (state, action) => {
        state.listCryptocurrencies = state.listCryptocurrencies.map(el => {
          const cryptocurrency = action.payload[el.id.toString()];
          if (cryptocurrency) {
              el = Object.assign(el, cryptocurrency);
          }
          return el;
        });

        state.showCryptocurrencies = state.showCryptocurrencies.map(el => {
          const cryptocurrency = action.payload[el.id.toString()];
          if (cryptocurrency) {
              el = Object.assign(el, cryptocurrency);
          }
          return el;
        });
    });
  },
});

export const {
  searchCryptocurrencies,
  loadMoreCryptocurrencies,
  setVisibleCryptocurrencies,
} = listCryptocurrenciesSlice.actions;

const listCryptocurrenciesReducer = listCryptocurrenciesSlice.reducer;
export default listCryptocurrenciesReducer;
