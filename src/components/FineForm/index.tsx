import { DefaultButton, PrimaryButton, TextField, Text } from '@fluentui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),

  firstName: yup
    .string()
    .min(2, 'First name should be of minimum 2 characters length')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'Last name should be of minimum 2 characters length')
    .required('Last name is required'),
});

function FineForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Text variant='xLarge'>Details</Text>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder='your first name'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          errorMessage={(formik.touched.firstName && Boolean(formik.errors.firstName)) ? formik.errors.firstName : undefined}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder='your last name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          errorMessage={(formik.touched.lastName && Boolean(formik.errors.lastName)) ? formik.errors.lastName : undefined}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder='example@someplace.com'
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={(formik.touched.email && Boolean(formik.errors.email)) ? formik.errors.email : undefined}
        />


        <PrimaryButton type="submit" text='Save' />
        <DefaultButton text='Cancel' />
      </form>

    </div>
  );
}

export default FineForm;


