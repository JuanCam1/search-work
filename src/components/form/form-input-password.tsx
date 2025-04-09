import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

interface FormPasswordInputProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="flex flex-row items-center bg-base-100 border-base-300 rounded-md w-full h-14">
      <TextInput
        className="p-4 border-none w-[85%] h-full"
        value={value}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        onChangeText={onChangeText}
      />
      <Pressable onPress={toggleShowPassword} className="flex justify-center items-center bg-base-200 rounded-r-md w-[15%] h-full">
        {
          showPassword ?
            <Entypo name="eye" size={20} color="black" /> :
            <Entypo name="eye-with-line" size={20} color="black" />
        }
      </Pressable>
    </View>
  );
};

export default FormPasswordInput;
