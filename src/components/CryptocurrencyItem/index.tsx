import { Typography } from '@components/typography';
import { Cryptocurrency } from '@constants/types';
import React from 'react';
import { View } from 'react-native';

const CryptocurrencyItem = ({ cryptocurrency }: { cryptocurrency: Cryptocurrency }) => {

    return (
        <View
            className="flex flex-row justify-between">
            <View className='flex flex-row items-center'>
                <View className="flex flex-col">
                    <Typography typoStyle="text-white font-bold" variant="h4">
                        {cryptocurrency.symbol}
                    </Typography>
                    <Typography typoStyle="text-silver" variant="subTitle">
                        {cryptocurrency.name}
                    </Typography>
                </View>
            </View>
            <View className='flex flex-row'>
                <View className="flex flex-col">
                    {
                        cryptocurrency.quote.USD.percent_change_1h > 0 ? (
                            <Typography typoStyle="text-green font-bold self-end" variant="h4">
                                {`${cryptocurrency.quote.USD.percent_change_1h.toFixed(2)}%`}
                            </Typography>) : (
                            <Typography typoStyle="text-red font-bold self-end" variant="h4">
                                {`${cryptocurrency.quote.USD.percent_change_1h.toFixed(2)}%`}
                            </Typography>)
                    }
                    <Typography typoStyle="ml-S text-white self-end" variant="subTitle">
                        {`$${cryptocurrency.quote.USD.price.toFixed(2)}`}
                    </Typography>
                </View>
            </View>
        </View>
    );
};

export default CryptocurrencyItem;
