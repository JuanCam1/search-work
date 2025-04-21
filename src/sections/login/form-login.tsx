import { View } from "react-native";
import { useRouter } from "expo-router";
import FormButton from "@/components/form/form-button";
import FormInput from "@/components/form/form-input";
import FormPasswordInput from "@/components/form/form-input-password";
import useForm from "@/hooks/use-form";
import type { FormFieldsI } from "@/models/form-model";


const FormLogin = () => {
  const router = useRouter();
  const onSubmit = (fields: FormFieldsI) => {
    console.log(fields);
  }

  const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);


  return (
    <View className="flex flex-col gap-4 mt-6 w-full">
      <FormInput
        placeholder="Email"
        value={fields.email}
        onChangeText={(value) => setFieldValue("email", value)}
      />
      <FormPasswordInput
        placeholder="Contraseña"
        value={fields.password}
        onChangeText={(value) => setFieldValue("password", value)}
      />

      <FormButton label="Iniciar Sesión" onPress={() => {
        router.push("drawer/home");
      }} />
    </View>
  )
}
export default FormLogin