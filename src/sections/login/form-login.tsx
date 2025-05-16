import { TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import FormButton from "@/components/form/form-button";
import FormPasswordInput from "@/components/form/form-input-password";
import useForm from "@/hooks/use-form";
import Feather from "@expo/vector-icons/Feather";
import type { FormFieldsI } from "@/models/form-model";
import FormInputIcon from "@/components/form/form-input-icon";

const FormLogin = () => {
	const router = useRouter();
	const onSubmit = (fields: FormFieldsI) => {
		console.log(fields);
	};

	const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);

	return (
		<View className="flex flex-col gap-4 mt-6 w-full">
			<FormInputIcon
				placeholder="Email"
				value={fields.email}
				onChangeText={(value) => setFieldValue("email", value)}
			>
				<Feather name="mail" size={16} color="#9CA3AF" />
			</FormInputIcon>

			<FormPasswordInput
				placeholder="Contraseña"
				value={fields.password}
				onChangeText={(value) => setFieldValue("password", value)}
			/>

			<FormButton
				label="Iniciar Sesión"
				onPress={() => {
					router.push("drawer/home");
				}}
			/>
		</View>
	);
};
export default FormLogin;
