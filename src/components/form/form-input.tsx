import type { FC, ReactNode } from "react";
import { TextInput } from "react-native";

interface FormInputProps {
	value: string;
	placeholder?: string;
	onChangeText: (value: string) => void;
	className?: ReactNode;
}
const FormInput: FC<FormInputProps> = ({
	value,
	placeholder,
	onChangeText,
}) => {
	return (
		<TextInput
			className="h-full flex-1 text-md p-2.5 pl-3 border-none bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
			value={value}
			placeholder={placeholder || ""}
			onChangeText={onChangeText}
			placeholderTextColor="#9CA3AF"
		/>
	);
};
export default FormInput;
