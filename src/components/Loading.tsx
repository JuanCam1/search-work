import { ActivityIndicator,ActivityIndicatorProps } from "react-native"

interface LoadingProps extends ActivityIndicatorProps{
  background: string
  size?: number | "large" | "small"
}
export const Loading = ({ background, size = "large",...props }: LoadingProps) => {
  return (
    <ActivityIndicator
      style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}
      animating={true}
      color={background}
      size={size}
      {...props}
    />
  )
}
