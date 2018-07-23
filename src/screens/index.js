import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import FirstTabScreen from "./types/FirstTabScreen";
import SecondTabScreen from "./types/SecondTabScreen";
import Drawer from "./types/Drawer";

export function registerScreens() {
  Navigation.registerComponent("example.FirstTabScreen", () => FirstTabScreen);
  Navigation.registerComponent(
    "example.SecondTabScreen",
    () => SecondTabScreen
  );
  Navigation.registerComponent("example.Types.Drawer", () => Drawer);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        "screenVisibility",
        `Screen ${screen} displayed in ${endTime -
          startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
