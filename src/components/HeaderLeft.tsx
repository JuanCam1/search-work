import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export const HeaderLeft = () => {
const goToProfile = () => {
  router.push("(tabs)/profile")
}
  return (
    <Pressable
      onPress={goToProfile}
      style={{
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        width: 200
      }}
    >
      <Image
        source={require("../../assets/images/other/login.jpeg")}
        className="size-10 rounded-full ml-5 border border-seance-900"
      />

      <View>
        <Text className="text-xl, font-bold ml-2 text-white" >Juan Camilo</Text>
        <Text className="text-xl, font-bold ml-2 text-gray-200">
          jcdiaz1998@outlook.es
        </Text>
      </View>
    </Pressable>
  );
};
