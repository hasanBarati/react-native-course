import React from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";

function PoekemanCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>
      <Image source={image} accessibilityLabel={`${name} Pokemon`} />
      <View>
        <Text>{type}</Text>
      </View>
      <View>
        <Text>Moves: {moves?.join(", ")}</Text>
      </View>
      <View>
        <Text>Weakness: {weaknesses?.join(", ")}</Text>
      </View>
    </View>
  );
}

export default PoekemanCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
});
