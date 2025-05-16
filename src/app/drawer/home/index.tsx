import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FormInput from "@/components/form/form-input-icon";
import FormButton from "@/components/form/form-button";
import FormInputIcon from "@/components/form/form-input-icon";
import { Feather } from "@expo/vector-icons";

const Home = () => {
	return (
		<View className="flex-1">
			<View className="flex justify-center items-center gap-8 bg-base-700 rounded-b-md w-full h-[40%]">
				<Text className="font-bold text-white text-5xl">DevJobs</Text>
				<View className="flex flex-col items-center gap-4 w-[80%]">
					<FormInputIcon
						onChangeText={(value) => console.log(value)}
						placeholder="¿Qué empleo buscas?"
						value=""
					>
						<Feather name="search" size={16} color="#9CA3AF" />
					</FormInputIcon>
					<View className="w-[30%]">
						<FormButton
							label="Buscar"
							className="bg-zinc-800"
							onPress={() => console.log("Buscar")}
						/>
					</View>
				</View>
			</View>
			<View className="flex items-center pt-4 h-[60%]">
				<View className="w-[80%]">
					<Text className="mb-4 font-semibold text-base">
						Últimas Búsquedas
					</Text>
					<View className="flex flex-col gap-4">
						<View className="flex flex-row items-center gap-4 px-5 py-3 border border-zinc-300 rounded-md w-full">
							<AntDesign name="clockcircleo" size={24} color="#a1a1aa" />
							<View>
								<Text>Frontend React</Text>
								<Text className="text-zinc-400">Bucaramanga, Santander</Text>
							</View>
						</View>
						<View className="flex flex-row items-center gap-4 px-5 py-3 border border-zinc-300 rounded-md w-full">
							<AntDesign name="clockcircleo" size={24} color="#a1a1aa" />
							<View>
								<Text>Frontend React</Text>
								<Text className="text-zinc-400">Bucaramanga, Santander</Text>
							</View>
						</View>
						<View className="flex flex-row items-center gap-4 px-5 py-3 border border-zinc-300 rounded-md w-full">
							<AntDesign name="clockcircleo" size={24} color="#a1a1aa" />
							<View>
								<Text>Frontend React</Text>
								<Text className="text-zinc-400">Bucaramanga, Santander</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
export default Home;
