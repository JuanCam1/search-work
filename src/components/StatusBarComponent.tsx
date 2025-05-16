import { StatusBarProps,StatusBar } from "expo-status-bar";
import { themeColor } from "@/utilities";

type StatusProps = StatusBarProps;
export const StatusBarComponent = ({ ...props }: StatusProps) => {
  const isTheme = themeColor()

  return <StatusBar style={isTheme} {...props} />;
}
