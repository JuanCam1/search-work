import type { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

interface FormButtonProps {
  label: string;
  onPress: () => void;
}
const FormButton: FC<FormButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center bg-base-700 p-4 border border-base-700 rounded-md w-full h-14"
      onPress={onPress}
    >
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
};
export default FormButton;
