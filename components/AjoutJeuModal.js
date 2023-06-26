import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default function AjoutJeuModal({ visible, onAddJeu, onCloseModal }) {
  const [inputNom, setInputNom] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategorie, setInputCategorie] = useState("");

  const handleAddJeu = () => {
    const nouveauJeu = {
      name: inputNom,
      price: inputPrice,
      catégorie: inputCategorie,
      id: Date.now(),
    };

    onAddJeu(nouveauJeu);

    setInputNom("");
    setInputCategorie("");
    setInputPrice("");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
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
              placeholder="Saisir Catégorie"
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
              <Button title="Add" onPress={handleAddJeu} />
              <Button title="Fermer" onPress={onCloseModal} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
