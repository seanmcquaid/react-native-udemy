import {Navigation} from "react-native-navigation";
import AuthScreen from "./src/screens/AuthScreen/AuthScreen";

// Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

// Start A App

Navigation.startSingleScreenApp({
  screen : {
    screen : "awesome-places.AuthScreen",
    title : "Login"
  }
})