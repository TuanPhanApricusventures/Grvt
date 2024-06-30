1. Running the App Locally

    - Install Dependencies: Run the following command to install all the necessary libraries:
        yarn install

    - iOS: To run the app on the iOS simulator, execute:
        yarn ios

    - Android: To run the app on the Android emulator, use:
        yarn android

2. This cryptocurrency app offers a comprehensive experience for users to track the market:

    Extensive Cryptocurrency List: Fetches and displays a paginated list of all active cryptocurrencies (up to 5,000 entries) with their latest market data.

    Real-time Price Updates (Optimized): Provides live price updates for cryptocurrencies currently visible on the screen, refreshing every minute for optimal performance.

    Offline Search: Users can search for specific cryptocurrencies by symbol or token name, even without an internet connection.

    Efficient Pull-to-Refresh: Updates the list of displayed cryptocurrencies (only those visible) when users pull down on the screen.

    Infinite Scrolling: Seamlessly loads more cryptocurrencies as users scroll down the list, eliminating the need for manual pagination.

    Optimized Rendering: Renders hundreds of cryptocurrencies smoothly without performance issues like blank spaces or lagging frame rates.

    Caching Strategy: Follows best practices outlined in the CoinMarketCap API documentation (https://coinmarketcap.com/api/documentation/v1/) to optimize data fetching and caching.



