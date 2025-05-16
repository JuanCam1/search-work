import type { FC, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import clsx from "clsx";

interface FormButtonProps {
  label: string;
  onPress: () => void;
  className?: ReactNode;
}
const FormButton: FC<FormButtonProps> = ({ label, onPress, className }) => {
  return (
    <TouchableOpacity
      className={clsx("flex justify-center items-center bg-base-700 p-4 border border-base-700 rounded-md w-full h-14", className)}
      onPress={onPress}
    >
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
};
export default FormButton;
