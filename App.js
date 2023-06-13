import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [liste, setListe] = useState([
    {
      name: "Medal of Honor",
      price: "10€",
      catégorie: "FPS",
      id: 23124,
    },
    {
      name: "Street Fighter 2",
      price: "20€",
      catégorie: "Combat",
      id: 12349,
    },

    {
      name: "Call of Duty",
      price: "30€",
      catégorie: "FPS",
      id: 549762,
    },

    {
      name: "NBA2K5",
      price: "5€",
      catégorie: "Sport",
      id: 549763,
    },

    {
      name: "God Of War 2018",
      price: "25€",
      catégorie: "Action-Aventure",
      id: 549764,
    },

    {
      name: "The Legend of Zelda : The Wind Walker",
      price: "35€",
      catégorie: "Action-Aventure",
      id: 549765,
    },

    {
      name: "Horizon : Forbidden West",
      price: "40€",
      catégorie: "Action-Aventure",
      id: 549766,
    },

    {
      name: "Forza Horizon 5",
      price: "45€",
      catégorie: "Voiture",
      id: 549767,
    },

    {
      name: "The Last Of Us",
      price: "55€",
      catégorie: "Survival-horror",
      id: 549768,
    },

    {
      name: "Red Dead Redemption II",
      price: "18€",
      catégorie: "Action-Aventure",
      id: 549769,
    },
  ]);
  console.log(liste);
  //-----------------------------------------------------------------------------------------//
  const [selectedCategorie, setCategorie] = useState("");
  console.log(selectedCategorie);

  // if (!jeux) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  return (
    <View style={styles.background}>
      <Image
        source={{
          uri: "https://e1.pxfuel.com/desktop-wallpaper/719/393/desktop-wallpaper-cocktail-for-android.jpg",
        }}
        style={styles.backgroundImage}
      ></Image>
      <View style={styles.entete}>
        <Text>Julien</Text>
        <Text>Nb Jeux Vidéo:{liste.length}</Text>
      </View>
      <View>
        <Text>Filtre par :</Text>
        <Picker
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
        <Text>
          Trier par prix : ajoute moi des checkbox pour trier par croissant ou
          decroissant
        </Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          {liste.map((item) => (
            <View key={item.id}>
              <Text>{item.name}|{item.price}</Text>
              <Text>#{item.catégorie}</Text>
            </View>
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
  },
  entete: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
});
