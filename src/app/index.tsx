import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import FormLogin from "@/sections/login/form-login";

const LoginScreen = () => {

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
          <Text className="text-slate-400 text-base">Digita tus credenciales</Text>
          <FormLogin />
        </View>

        <Text className="mt-6 text-slate-400">
          No tienes una cuenta? <Link href="register" className="text-blue-500">Registrate</Link>
        </Text>
        <Text className="mt-6 text-slate-400">
          Olvidaste tú contraseñá? <Link href="forgot-password" className="text-blue-500">Recuperar contraseña</Link>
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;
