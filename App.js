import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

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
  // console.log(liste);
  const [inputNom, setInputNom] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const newJeu = () => {
    const dernierId = liste[liste.length - 1]?.id;

    const nouvJeu = {
      name: inputNom,
      price: inputPrice,
      catégorie: inputCategorie,
      //id: liste[liste.length].id + 1,
      id: dernierId + 1,
    };
    setListe([...liste, nouvJeu]);
    setInputNom("");
    setInputCategorie("");
    setInputPrice("");
  };

  const removeJeu = (index) => {
    const removeJeu = [...liste];
    removeJeu.splice(index, 1);
    setListe(removeJeu);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  //-----------------------------------------------------------------------------------------//
  const [selectedCategorie, setCategorie] = useState("");
  function MyCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
    );
  }
  if (selectedCategorie) {
  }

  // if (!jeux) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  return (
    <View style={styles.background}>
      <ScrollView>
        {/*------------------------------- Section pour ajouter image de fond d'ecran -------------------------------*/}
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/93/b6/ac/93b6ac1b21132ba63eb5bb1fc3b7f3fb.gif",
          }}
          style={styles.backgroundImage}
        ></Image>
        {/*------------------------------- Section entete de la page -------------------------------*/}
        <View style={styles.entete}>
          <Text>Julien</Text>
          <Text>Nb Jeux Vidéo:{liste.length}</Text>
        </View>
        {/*------------------------------- Section pour filtrer les jeux -------------------------------*/}
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
          <View style={styles.filtre}>
          <Text style={styles.text}>Trier par prix:   </Text>
            <View style={styles.checkboxContainer}>
              <Text>Croissant: </Text>
              <MyCheckbox />
              <Text>   Decroissant: </Text>
              <MyCheckbox />
            </View>
          </View>
        {/*------------------------------- Section pour voir la liste des jeux -------------------------------*/}
        <View style={styles.container}>
          <ScrollView>
            {liste.map((item, index) => (
              <View key={item.id}>
                <Text>
                  {item.name}|{item.price}
                  <Button title="X" onPress={() => removeJeu(index)} />
                </Text>
                <Text>#{item.catégorie}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/*------------------------------- Section pour ajouter un jeu -------------------------------*/}
        <Button title="Ajouter un jeu" onPress={() => openModal()} />
      </ScrollView>
      {/*------------------------------- Section pour ajouter un jeu via Modal-------------------------------*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View /*style={{ flexDirection: "row" }}*/>
              <TextInput
                style={styles.input}
                placeholder="Saisir Nom"
                onChangeText={(text) => setInputNom(text)}
                value={inputNom}
              />
              <TextInput
                style={styles.input}
                placeholder="Saisir Prix"
                onChangeText={(text) => setInputPrice(text)}
                value={inputPrice}
              />
              <TextInput
                style={styles.input}
                placeholder="Saisir Categorie"
                onChangeText={(text) => setInputCategorie(text)}
                value={inputCategorie}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button title="Add" onPress={() => newJeu()} />
                <Button title="Fermer" onPress={() => openModal()} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    height: "40%",
    justifyContent: "center",
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
    marginBottom: 10,
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
    marginBottom: -10,
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
  modalView: {
    marginTop: "50%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 200,
    fontSize: 15,
  },
});
