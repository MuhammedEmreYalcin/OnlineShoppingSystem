/* import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'


export default function KodlamaIoTextInput({...props}) {
    const [field,meta] = useField(props)

    return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...props}/>
        {meta.touched && !!meta.error ? (
            <Label pointing basic color='red' content={meta.error}></Label>
        ):null}
    </FormField>
  )
} */



  import React from 'react';
  import { useField } from 'formik';
  import { FormField, Label } from 'semantic-ui-react';
  
  export default function KodlamaIoTextInput(props) {
      // Destrukturierung mit Schutz vor null/undefined
      const [field, meta] = useField(props.name ? props : { name: '' });
      
      return (
          <FormField error={meta?.touched && !!meta?.error}>
              <input {...field} {...props}/>
              {meta?.touched && !!meta?.error ? (
                  <Label pointing basic color='red' content={meta.error}></Label>
              ):null}
          </FormField>
      );
  }
