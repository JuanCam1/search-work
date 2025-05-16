import FormButton from "@/components/form/form-button";
import FormInput from "@/components/form/form-input-icon";
import FormPasswordInput from "@/components/form/form-input-password";
import { Link } from "expo-router";
import { Text, View, Image } from "react-native";

const RegisterScreen = () => {
	return (
		<View className="flex flex-1 justify-center bg-zinc-200 dark:bg-zinc-950">
			<View className="flex items-center dark:bg-zinc-900 py-8 w-full">
				<View className="rounded-full size-40 overflow-hidden">
					<Image
						source={require("@/assets/images/work-logo.png")}
						className="size-full object-cover"
					/>
				</View>
				<View className="flex flex-col items-center gap-2 mt-4 px-8 w-full">
					<Text className="font-bold text-white text-2xl">Iniciar Sesión</Text>
					<Text className="text-slate-400 text-base">
						Digita tus credenciales
					</Text>
					<View className="flex flex-col gap-4 mt-6 w-full">
						<FormInput
							placeholder="Nombre"
							value=""
							onChangeText={(value) => console.log(value)}
						/>
						<FormInput
							placeholder="Cargo"
							value=""
							onChangeText={(value) => console.log(value)}
						/>
						<FormInput
							placeholder="Email"
							value=""
							onChangeText={(value) => console.log(value)}
						/>
						<FormPasswordInput
							placeholder="Contraseña"
							value=""
							onChangeText={(value) => console.log(value)}
						/>

						<FormButton
							label="Iniciar Sesión"
							onPress={() => console.log("Iniciar Sesión")}
						/>
					</View>
				</View>
				<Text className="mt-6 text-slate-400">
					Ya tienes cuenta?{" "}
					<Link href="index" className="text-blue-500">
						Inicia Sesión
					</Link>
				</Text>
			</View>
		</View>
	);
};
export default RegisterScreen;
