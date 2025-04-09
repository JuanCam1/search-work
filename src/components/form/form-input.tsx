import type { FC } from "react";
import { TextInput } from "react-native";

interface FormInputProps {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
}
const FormInput: FC<FormInputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <TextInput
      className="bg-base-100 p-4 border border-base-300 rounded-md w-full h-14 text-base-content"
      value={value}
      placeholder={placeholder || ""}
      onChangeText={onChangeText}
    />
  );
};
export default FormInput;
