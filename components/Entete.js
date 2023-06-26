import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Entete({ liste, selectedCategorie, setCategorie, categoriesArray }) {
  return (
    <>
      <View style={styles.entete}>
        <Text>Julien</Text>
        <Text>Nb Jeux Vidéo: {liste.length}</Text>
      </View>
      <View style={styles.entete}>
        <Text style={styles.text}>Filtre par :</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategorie}
          onValueChange={(itemValue) => setCategorie(itemValue)}
        >
          {categoriesArray.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  entete: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    marginRight: 10,
  },
  picker: {
    flex: 1,
    marginLeft: 10,
  },
});
