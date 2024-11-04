import React from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails=(type:string)=>{
  switch(type.toLowerCase()){
    case "electronic": return {borderColor:"#FFD700"}
    case "fire": return {borderColor:"#FF5733"}
    default: return {borderColor:"A0A0A0"}
  }
}
function PoekemanCard({ name, image, type, hp, moves, weaknesses }) {
  const {borderColor}=getTypeDetails(type)
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
      </View>
      <Image source={image} accessibilityLabel={`${name} Pokemon`} resizeMode="contain" />
      <View style={styles.typeContainer}>
      <View style={[styles.badge,{borderColor}]}>
        <Text style={styles.Typetext}>{type}</Text>
      </View>
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
  nameContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:32
  },
  name:{
    fontSize:30,
    fontWeight:"bold",

  },
  hp:{
    fontSize:20
  },
  image:{
    width:"100%",
    height:200,
    marginBottom:16
  },
  typeContainer:{
    marginBottom:40,
    alignItems:"center"
  },
  badge:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:20,
    borderWidth:4
  },
  typeText:{
    fontSize:22,
    fontWeight:"bold"
  }
});
