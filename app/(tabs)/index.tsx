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
  TextInput,
  Switch,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import Box from "@/components/Box";
import PoekemanCard from "@/components/PokemanCard";
import pokemanLists from "@/data.json"

const logImage = require("@/assets/images/adaptive-icon.png");
export default function HomeScreen() {
  const [name,setName]=useState("")
  const [dark,setDark]=useState(false)
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
  const blubasuData={
    name:"BluBasuar",
    iamge:require("@/assets/images/react-logo.png"),
    type:"electronic",
    hp:40,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["water","Rock"]
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label} >username:</Text>
          <TextInput style={styles.input}  placeholder="enter your username"/>
          <Text style={styles.label} >passowrd</Text>
          <TextInput secureTextEntry style={styles.input}/>
          <Button title="login"  />
        </View>
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
  form: {
       backgroundColor:"white",
       padding:20,
       borderRadius:10,
       shadowColor:"black",
       shadowOffset:{
        width:0,
        height:2
       },
       shadowOpacity:0.25,
       shadowRadius:4,
       elevation:5
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
  input: {
    height:40,
    margin:12,
    padding:10,
    borderWidth:1
  }
});
