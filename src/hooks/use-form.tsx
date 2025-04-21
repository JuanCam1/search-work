import type { FormErrorsI, FormFieldsI, FormReturnI } from '@/models/form-model';
import { useState } from 'react';


const useForm = (onSubmit: (fields: FormFieldsI) => void): FormReturnI => {
  const [fields, setFields] = useState<FormFieldsI>({});
  const [errors, setErrors] = useState<FormErrorsI>({});

  const setFieldValue = (fieldName: string, value: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    const formErrors: FormErrorsI = {};

    // Aquí realizamos las validaciones de cada campo
    // Si un campo es inválido, lo agregamos al objeto `formErrors`

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(fields);
    }
  };

  return {
    fields,
    errors,
    setFieldValue,
    handleSubmit,
  };
};

export default useForm;