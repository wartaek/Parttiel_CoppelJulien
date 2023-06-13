import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Filter = ({ selectedCategorie, liste }) => {
  return (
    <View style={styles.entete}>
    <Text style={styles.text}>Filtre par :</Text>
    <Picker
      style={styles.picker}
      selectedValue={selectedCategorie}
      onValueChange={(itemValue) => setCategorie(itemValue)}
    >
      {liste.map((item) => (
        <Picker.Item
          key={item.id}
          label={item.catégorie}
          value={item.catégorie}
        />
      ))}
    </Picker>
  </View>
  );
};

const styles = StyleSheet.create({
  entete: {
    width: "90%",
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 150,
  },
});

export default Filter;
