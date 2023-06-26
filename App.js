import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MyCheckbox from "./components/MyCheckbox";
import JeuxList from "./components/JeuxList";
import AjoutJeuModal from "./components/AjoutJeuModal";

export default function App() {
  const [liste, setListe] = useState([
    {
      name: "Medal of Honor",
      price: 10,
      catégorie: "FPS",
      id: 23124,
    },
    {
      name: "Street Fighter 2",
      price: 20,
      catégorie: "Combat",
      id: 12349,
    },

    {
      name: "Call of Duty",
      price: 30,
      catégorie: "FPS",
      id: 549762,
    },

    {
      name: "NBA2K5",
      price: 5,
      catégorie: "Sport",
      id: 549763,
    },

    {
      name: "God Of War 2018",
      price: 25,
      catégorie: "Action-Aventure",
      id: 549764,
    },

    {
      name: "The Legend of Zelda : The Wind Walker",
      price: 35,
      catégorie: "Action-Aventure",
      id: 549765,
    },

    {
      name: "Horizon : Forbidden West",
      price: 40,
      catégorie: "Action-Aventure",
      id: 549766,
    },

    {
      name: "Forza Horizon 5",
      price: 45,
      catégorie: "Voiture",
      id: 549767,
    },

    {
      name: "The Last Of Us",
      price: 55,
      catégorie: "Survival-horror",
      id: 549768,
    },

    {
      name: "Red Dead Redemption II",
      price: 18,
      catégorie: "Action-Aventure",
      id: 549769,
    },
  ]);

  // Créer un ensemble pour stocker les catégories uniques
  const categoriesSet = new Set();

  // Parcourir la liste de jeux et ajouter les catégories à l'ensemble
  liste.forEach((item) => {
    categoriesSet.add(item.catégorie);
  });

  // Convertir l'ensemble en tableau
  const categoriesArray = Array.from(categoriesSet);

  const [selectedCategorie, setCategorie] = useState("");
  const [triCroissant, setTriCroissant] = useState(false);
  const [triDecroissant, setTriDecroissant] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(triCroissant);
  console.log(triDecroissant);

  const handleAddJeu = (nouveauJeu) => {
    setListe([...liste, nouveauJeu]);
  };

  const handleRemoveJeu = (index) => {
    const newListe = [...liste];
    newListe.splice(index, 1);
    setListe(newListe);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.background}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/93/b6/ac/93b6ac1b21132ba63eb5bb1fc3b7f3fb.gif",
        }}
        style={styles.backgroundImage}
      />
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
      <JeuxList
        jeux={liste}
        selectedCategorie={selectedCategorie}
        triCroissant={triCroissant}
        triDecroissant={triDecroissant}
        onRemoveJeu={handleRemoveJeu}
      />
      <Button title="Ajouter un jeu" onPress={handleOpenModal} />
      <AjoutJeuModal
        visible={modalVisible}
        onAddJeu={handleAddJeu}
        onCloseModal={handleCloseModal}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  entete: {
    width: "90%",
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 50,
    marginBottom: -30,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  filtre: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
