import React from 'react';
import ErrorMessage from './errorMessage';
import {useFormikContext} from 'formik';
import AppPicker from '../AppPicker';

function AppFormPicker({name,items,placeholder,PickerItemComponent,numColumns}) {
    const {values,touched,setFieldValue ,errors} = useFormikContext(); 
    return (
       <>
         <AppPicker 
            items={items}
            numColumns={numColumns}
            onSelected={(item)=>setFieldValue(name,item)}
            placeholder={placeholder}
            selectedItem={values[name]}
            PickerItemComponent={PickerItemComponent}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
       </>
    );
}

export default AppFormPicker;