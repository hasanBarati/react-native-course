import {
  Platform,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { Home } from "../home/page";
import { createDrawerNavigator } from "@react-navigation/drawer";

const logImage = require("@/assets/images/adaptive-icon.png");
export default function HomeScreen() {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const charmanData = {
    name: "Charmander",
    iamge: require("@/assets/images/react-logo.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"],
  };
  const blubasuData = {
    name: "BluBasuar",
    iamge: require("@/assets/images/react-logo.png"),
    type: "electronic",
    hp: 40,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"],
  };
  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{ title: "My dashboard" ,drawerLabel:"dashboard Label"}}
      />
      <Drawer.Screen name="about" component={Home} />
    </Drawer.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={Home} />
    // </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  content: {
    //  width:100,
    //  height:100,
    padding: 60,
    paddingHorizontal: Platform.OS === "android" ? 20 : 0,
    //  paddingVertical:20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "blue",
      },
      android: {
        color: "purple",
      },
    }),
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
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});
