import { DefaultButton, PrimaryButton, TextField } from '@fluentui/react';
import React from 'react';
import { Formik, Field, Form, FormikHelpers, FieldProps } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

function FineForm() {
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <Field id="firstName" name="firstName" placeholder="John" as={TextField} />
          <Field id="lastName" name="lastName" placeholder="Doe" as={TextField} />
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
            as={TextField}
          />

          <PrimaryButton type="submit" text='Save' />
          <DefaultButton text='Cancel' />
        </Form>
      </Formik>
    </div>
  );
}

export default FineForm;


