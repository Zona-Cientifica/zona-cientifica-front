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
          height: 145,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 112,
        }}
      />
      <DrawerContentScrollView {...props} style={{marginTop: 160}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
}
