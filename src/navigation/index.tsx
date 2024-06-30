import {
  createNavigationContainerRef,
  NavigationContainer,
  RouteProp,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { t } from "@localization/index";
import colors from "@constants/colors/index";
import { List } from "@screens/List";

export type RootStackParamList = {
  List: undefined,
};

export type navigationProps = NativeStackNavigationProp<RootStackParamList>;
export type routeProps = RouteProp<RootStackParamList>;

export const rootRef = createNavigationContainerRef();
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): JSX.Element => {
  return (
    <>
      <NavigationContainer ref={rootRef}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

const RootNavigator = (): JSX.Element => {

  return (
    <RootStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center'
      }}
      initialRouteName="List">
      <RootStack.Screen
        name="List"
        component={List}
        options={{
          title: t('ListTitle'),
          headerShown: true,
          headerShadowVisible: false,
          animation: "slide_from_right",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.grey,
          },
        }}
      />
    </RootStack.Navigator>
  );
};
