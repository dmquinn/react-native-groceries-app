import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { useNavigation } from "@react-navigation/native";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("BasketScreen")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-ld text-white font-extrabold">
          {basketTotal} EUR{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
