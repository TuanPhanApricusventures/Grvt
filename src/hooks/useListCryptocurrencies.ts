import { ViewableItem } from "@constants/types";
import { useAppDispatch, useAppSelector } from "@store/index";
import { loadMoreCryptocurrencies, searchCryptocurrencies, setVisibleCryptocurrencies } from "@store/slices";
import { useCallback, useEffect, useRef, useState } from "react"
import { getAllListCryptocurrencies, getSpecificCryptocurrencies } from "src/services/api";

export const useListCryptocurrencies = () => {

    const showCryptocurrencies =
        useAppSelector((state) => state.listCryptocurrencies.showCryptocurrencies);

    const filteredCryptocurrencies =
        useAppSelector((state) => state.listCryptocurrencies.filteredCryptocurrencies);

    const [keyword, setKeyword] = useState('')

    const [isRefreshing, setIsRefreshing] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllListCryptocurrencies());
        const id = setInterval(() => {
            dispatch(getSpecificCryptocurrencies());
        }, 60000);
        return () => clearInterval(id);
    }, [])

    const handleSearch = (value: string) => {
        setKeyword(value);
        dispatch(searchCryptocurrencies(value));
    }

    const handleLoadMore = () => {
        dispatch(loadMoreCryptocurrencies());
    };

    const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewableItem[] }) => {
        dispatch(setVisibleCryptocurrencies(viewableItems));
    }, []);

    const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
    ]);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        await dispatch(getSpecificCryptocurrencies());
        setIsRefreshing(false);
    };

    return {
        filteredCryptocurrencies,
        showCryptocurrencies,
        isRefreshing,
        keyword,
        handleRefresh,
        handleSearch,
        handleLoadMore,
        viewabilityConfigCallbackPairs
    }
}
