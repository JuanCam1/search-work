import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export const HeaderRight = () => {
  return (
    <Pressable
    onPress={() =>
      router.push("home/favorites")
    }
      style={{
        paddingBottom: 10,
        paddingRight: 15,
        display: "flex",
        flexDirection: "row"
      }}
    >
      <AntDesign name="heart" size={24} color="#d64955" />
    </Pressable>
  );
};
