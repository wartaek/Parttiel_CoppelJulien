import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function JeuItem({ jeu, index, onRemoveJeu }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemPrice}>
        {jeu.name} | {jeu.price}€
        <Button title="X" onPress={() => onRemoveJeu(index)} />
      </Text>
      <Text style={styles.itemCategory}>#{jeu.catégorie}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 20,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 5,
  },
  itemCategory: {
    fontSize: 14,
    color: "#555555",
  },
});
