import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import JeuItem from "./JeuItem";

export default function JeuxList({
  jeux,
  selectedCategorie,
  triCroissant,
  triDecroissant,
  onRemoveJeu,
}) {
  const trierJeux = (jeux) => {
    if (triCroissant) {
      console.log("croissant");
      return jeux.sort((a, b) => a.price - b.price);
    } else if (triDecroissant) {
      console.log("decroissant");
      return jeux.sort((a, b) => b.price - a.price);
    } else {
      console.log("none");
      return jeux;
    }
  };  

  return (
    <ScrollView>
      {trierJeux(jeux)
        .filter(
          (jeu) => !selectedCategorie || jeu.catégorie === selectedCategorie
        )
        .map((jeu, index) => (
          <JeuItem
            key={jeu.id}
            jeu={jeu}
            index={index}
            onRemoveJeu={onRemoveJeu}
          />
        ))}
    </ScrollView>
  );
}
