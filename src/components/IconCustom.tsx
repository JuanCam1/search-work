import {
  AntDesign,
  Feather,
  FontAwesome5,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export const IconCustom = (props: {
  name: React.ComponentProps<
    typeof Ionicons & typeof Fontisto & typeof FontAwesome5 & typeof FontAwesome & typeof Feather & typeof MaterialCommunityIcons & typeof SimpleLineIcons & typeof AntDesign
  >["name"];
  size: number;
  color: string;
  type: "feather" | "ionicons" | "fontisto" | "fontAwesome5" | "fontAwesome" | "materialCommunityIcons" | "materialIcons" | "simpleLineIcons" | "antDesign";
  className?: any;
}) => {
  switch (props.type) {
    case "ionicons":
      return <Ionicons {...props} />;
    case "fontisto":
      return <Fontisto {...props} />;
    case "feather":
      return <Feather {...props} />;
    case "fontAwesome5":
      return <FontAwesome5 {...props} />;
    case "fontAwesome":
      return <FontAwesome {...props} />;
    case "materialCommunityIcons":
      return <MaterialCommunityIcons {...props} />;
    case "materialIcons":
      return <MaterialIcons {...props} />;
    case "simpleLineIcons":
      return <SimpleLineIcons {...props} />;
    case "antDesign":
      return <AntDesign {...props} />;
  }
};
