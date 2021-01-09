import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './errorMessage';
import { useFormikContext } from 'formik';

function AppFormikFiled({name, ...otherProps }) {
    const {touched,handleChange,setFieldTouched ,errors} = useFormikContext(); 
    return (
        <>
        <AppTextInput 
              onChangeText={handleChange(name)}
              onBlur={() => setFieldTouched(name)}
              {...otherProps} />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
       </>
    );
}

export default AppFormikFiled;