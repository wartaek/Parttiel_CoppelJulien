import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ jeuxLength }) => {
  return (
    <View style={styles.entete}>
      <Text>Julien</Text>
      <Text>Nb Jeux Vidéo: {jeuxLength}</Text>
    </View>
  );
};

export default Header;
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
  });
  