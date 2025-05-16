import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router"

const Detalle = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}
export default Detalle