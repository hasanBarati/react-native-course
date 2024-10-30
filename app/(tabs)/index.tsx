import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import Box from "@/components/Box";
import PoekemanCard from "@/components/PokemanCard";

const logImage = require("@/assets/images/adaptive-icon.png");
export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const charmanData={
    name:"Charmander",
    iamge:require("@/assets/images/react-logo.png"),
    type:"Fire",
    hp:39,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["water","Rock"]
  }
  return (
    <SafeAreaView style={styles.container}>
       <PoekemanCard {...charmanData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
  content: {
    //  width:100,
    //  height:100,
    padding: 60,
    paddingHorizontal: Platform.OS === "android" ? 20 : 0,
    //  paddingVertical:20,
  },
  text : {
    ...Platform.select({
       ios:{
          color:"blue"
       },
       android:{
          color:"purple"
       }

    })
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
});
