import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

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
		<View className="flex flex-row items-center h-12 border border-zinc-600 rounded-md">
			<Pressable
				onPress={toggleShowPassword}
				className="flex justify-center items-center px-3 py-2 h-full border border-r-0 rounded-l-md bg-white dark:bg-zinc-900"
			>
				{showPassword ? (
					<Entypo name="eye-with-line" size={16} color="#9CA3AF" />
				) : (
					<Entypo name="eye" size={16} color="#9CA3AF" />
				)}
			</Pressable>
			<TextInput
				className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
				value={value}
				placeholder={placeholder || ""}
				onChangeText={onChangeText}
				placeholderTextColor="#9CA3AF"
				secureTextEntry={!showPassword}
			/>
		</View>
	);
};

export default FormPasswordInput;
