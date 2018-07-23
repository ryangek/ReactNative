import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { registerScreens, registerScreenVisibilityListener } from "./screens";

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();

// start the app
const tabs = [
  {
    label: "FirstTabScreen",
    screen: "example.FirstTabScreen",
    icon: require("../img/list.png"),
    title: "Navigation Types"
  },
  {
    label: "SecondTabScreen",
    screen: "example.SecondTabScreen",
    icon: require("../img/list.png"),
    title: "Navigation Actions"
  }
];

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === "ios" ? "slide-down" : "fade",
  tabsStyle: {
    tabBarBackgroundColor: "#003a66",
    tabBarButtonColor: "#ffffff",
    tabBarSelectedButtonColor: "#ff505c",
    tabFontFamily: "BioRhyme-Bold"
  },
  appStyle: {
    tabBarBackgroundColor: "#003a66",
    navBarButtonColor: "#ffffff",
    tabBarButtonColor: "#ffffff",
    navBarTextColor: "#ffffff",
    tabBarSelectedButtonColor: "#ff505c",
    navigationBarColor: "#003a66",
    navBarBackgroundColor: "#003a66",
    statusBarColor: "#002b4c",
    tabFontFamily: "BioRhyme-Bold"
  },
  drawer: {
    left: {
      screen: "example.Types.Drawer"
    }
  }
});
