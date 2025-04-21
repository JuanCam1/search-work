export interface FormFieldsI {
  [fieldName: string]: string;
}

export interface FormErrorsI {
  [fieldName: string]: string;
}

export interface FormReturnI {
  fields: FormFieldsI;
  errors: FormErrorsI;
  setFieldValue: (fieldName: string, value: string) => void;
  handleSubmit: () => void;
}
