import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, ImageBackground, View } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <ImageBackground
      source={require("../../assets/backgrounds/color-morph3.png")}
      style={{ flex: 1, borderRightColor: "#000", borderRightWidth: 2 }}
    >
        <Image
          source={require("../../assets/backgrounds/Logo.png")}
          style={{
            width: 147,
            height: 147,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "25%",
          }}
        />
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </ImageBackground>
  );
}
