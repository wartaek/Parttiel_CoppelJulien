import React from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";

const AddJeuModal = ({
  modalVisible,
  openModal,
  inputNom,
  setInputNom,
  inputPrice,
  setInputPrice,
  inputCategorie,
  setInputCategorie,
  newJeu,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      style={styles.modal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
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
    </Modal>
  );
};

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
    width: 200,
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default AddJeuModal;
