import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((pro) => pro.id === Number(id));
  return (
    <View>
      <Stack.Screen options={{ title: product?.name }} />
      <Text style={styles.text}>ProductDetails for id {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
  },
});
