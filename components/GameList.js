import React from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";

const GameList = ({ liste, selectedCategorie, removeJeu }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {liste
          .filter((item) => !selectedCategorie || item.catégorie === selectedCategorie)
          .map((item, index) => (
            <View style={styles.mapping} key={item.id}>
              <Text>
                {item.name} | {item.price}
                <Button title="X" onPress={() => removeJeu(index)} />
              </Text>
              <Text>#{item.catégorie}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 50,
  },
  mapping: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default GameList;
