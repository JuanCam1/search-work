import { StyleProp, View, ViewStyle } from "react-native";

interface DividerProps {
  width?: number;
  orientation?: "horizontal" | "vertical";
  color?: string;
  margin?: number;
  dividerStyle?: any;
}

export const Divider: React.FC<DividerProps> = ({
  width = 1,
  orientation = "horizontal",
  color = "#DFE4EA",
  margin = 0,
  dividerStyle
}) => {
  const dividerStyles = [
    { width: orientation === "horizontal" ? "100%" : width },
    { height: orientation === "vertical" ? "100%" : width },
    { backgroundColor: color },
    dividerStyle
  ];

  if (orientation === "horizontal") {
    dividerStyles.push({ marginVertical: margin });
  } else {
    dividerStyles.push({ marginHorizontal: margin });
  }





  return <View style={dividerStyles} />;
};
