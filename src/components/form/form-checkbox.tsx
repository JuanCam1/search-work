import { View, Text, TouchableOpacity } from "react-native";

interface FormCheckboxProps {
	label: string;
	value: boolean;
	onValueChange: (newValue: boolean) => void;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
	label,
	value,
	onValueChange,
}) => {
	const handlePress = () => {
		onValueChange(!value);
	};

	return (
		<TouchableOpacity
			className="flex justify-center items-center"
			onPress={handlePress}
		>
			<View className="bg-base-100 border border-base-300 rounded-full w-6 h-6">
				{value && <View className="bg-base-content rounded-full w-6 h-6" />}
			</View>
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};

export default FormCheckbox;
