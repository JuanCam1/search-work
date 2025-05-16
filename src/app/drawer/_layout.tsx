import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconCustom } from "@/components/IconCustom";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter()
  const { top, bottom } = useSafeAreaInsets()

  return (
    <View className="flex flex-1 dark:bg-zinc-900">
      <DrawerContentScrollView {...props}
        scrollEnabled={false}
      >
        <View className='flex flex-col justify-center items-center bg-seance-100 pb-4 w-full h-80 overflow-hidden'>

          <View className="mt-14 mb-6 border border-zinc-100 rounded-full size-44 overflow-hidden">
            <Image source={require('@/assets/images/work-logo.png')}
              className="self-center size-full object-cover"
            />
          </View>
          <Text className="self-center font-semibold text-white text-2xl">
            Juan Camilo Rojas Diaz
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable className="flex flex-row p-5 border-t-[1px] border-t-zinc-500"
        style={{ paddingBottom: 20 + bottom }}
        onPress={() => router.replace('/')}
      >
        <IconCustom type="materialCommunityIcons" name="logout" size={24} color="#a1a1aa" className="pr-2 pl-4" />
        <Text className="font-bold text-zinc-500 text-xl">Salir</Text>

      </Pressable>
    </View>
  )

}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView className="flex flex-1">
      <Drawer drawerContent={CustomDrawerContent}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()} className="p-3">
              <IconCustom name="menu" size={26} color="#fff" type="ionicons" />
            </Pressable>
          ),
          drawerHideStatusBarOnOpen: false,
          drawerActiveBackgroundColor: "#27272a",
          drawerActiveTintColor: "#e4e4e7",
          drawerInactiveTintColor: "#a1a1aa",
          headerStyle: {
            backgroundColor: "#3e33db"
          },
          headerTitleAlign: "center",
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 18
          }
        })}>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Inicio",
            headerTitle: "",
            drawerIcon: ({ size, color }) => <IconCustom size={size} name="home" color={color} type="ionicons" className="pr-4" />
          }}
        />
        <Drawer.Screen
          name="applications"
          options={{
            drawerLabel: "Aplicaciones",
            headerTitle: "Aplicaciones",
            drawerIcon: ({ size, color }) => <IconCustom size={size} name="home" color={color} type="ionicons" className="pr-4" />
          }}
        />
        <Drawer.Screen
          name="favorities"
          options={{
            drawerLabel: "Favoritos",
            headerTitle: "Favoritos",
            drawerIcon: ({ size, color }) => <IconCustom size={size} name="home" color={color} type="ionicons" className="pr-4" />
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Perfil",
            headerTitle: "Perfil",
            drawerIcon: ({ size, color }) => <IconCustom size={size} name={"search"} color={color} type="ionicons" className="pr-4" />
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Configuración",
            headerTitle: "Configuración",
            drawerIcon: ({ size, color }) => <IconCustom size={size} name="settings" color={color} type="ionicons" className="pr-4" />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout;

