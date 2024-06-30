import CryptocurrencyItem from "@components/CryptocurrencyItem";
import { Input } from "@components/input";
import colors from "@constants/colors";
import { Cryptocurrency } from "@constants/types";
import { useListCryptocurrencies } from "@hooks/useListCryptocurrencies";
import React from "react";
import { FlatList, View, RefreshControl } from "react-native";

export const List = () => {

  const {
    showCryptocurrencies,
    filteredCryptocurrencies,
    isRefreshing,
    keyword,
    handleRefresh,
    handleSearch,
    handleLoadMore,
    viewabilityConfigCallbackPairs
  } = useListCryptocurrencies();

  return (
    <View className={"bg-grey flex-1"}>
      <Input onChangeText={handleSearch} />
      <FlatList
        data={keyword ? filteredCryptocurrencies : showCryptocurrencies}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 15
        }}
        ItemSeparatorComponent={() => <View className="h-[20px]" />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Cryptocurrency }) => (
          <CryptocurrencyItem cryptocurrency={item} />
        )}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={keyword ? null : handleLoadMore}
        refreshControl={
          keyword ?
            <></> :
            <RefreshControl
              tintColor={colors.white}
              refreshing={isRefreshing}
              onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};
