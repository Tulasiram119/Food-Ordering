import { Image, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";
import React from "react";
import { Link } from "expo-router";

const defaultImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";
type ProductListItemProps = {
  product: Product;
};
const ProductListItem = ({
  product,
}: ProductListItemProps): React.JSX.Element => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductListItem;
