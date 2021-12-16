import React from "react";
import { useFormikContext } from "formik";
import TextInput from "../TextInput";

function FormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange } = useFormikContext();

  return (
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
     
  );
}

export default FormField;