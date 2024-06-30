import React, { type PropsWithChildren } from "react";
import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getFontSize } from "@components/typography/index";
import colors from "@constants/colors/index";

interface Props {
  inputStyle?: string;
  onChangeText: (text: string) => void;
}

export const Input = (props: PropsWithChildren<Props>): JSX.Element => {
  const {
    inputStyle,
    onChangeText,
  } = props;

  return (
    <View
      className={`rounded-XL flex-row bg-white border border-lightWhite self-center items-center w-[93%] h-[55] ${inputStyle}`}
    >
      <View className="ml-M" />
      <Ionicons
        name="search"
        size={20}
        color={colors.black}
      />
      <TextInput
        testID="input"
        className="text-black flex-1 ml-S h-[100%]"
        style={{ fontSize: getFontSize("title") }}
        selectionColor={colors.black}
        onChangeText={onChangeText}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
      />
      <View className="mr-M" />
    </View>
  );
};
