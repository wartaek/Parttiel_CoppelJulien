import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Trie = ({ triCroissant, setTriCroissant, triDecroissant, setTriDecroissant }) => {
  return (
    <View style={styles.filtre}>
      <Text style={styles.text}>Trier par prix: </Text>
      <View style={styles.checkboxContainer}>
        <Text>Croissant: </Text>
        <MyCheckbox
          checked={triCroissant}
          onChange={(value) => setTriCroissant(value)}
        />
        <Text> Decroissant: </Text>
        <MyCheckbox
          checked={triDecroissant}
          onChange={(value) => setTriDecroissant(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filtre: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: -10,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Trie;
