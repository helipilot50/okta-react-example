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
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function FineForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
          id="email"
          name="email"
          label="Email"
          placeholder='example@someplace.com'
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={(formik.touched.email && Boolean(formik.errors.email)) ? formik.errors.email : undefined}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder='your password here'
          value={formik.values.password}
          onChange={formik.handleChange}
          errorMessage={(formik.touched.password && Boolean(formik.errors.password)) ? formik.errors.password : undefined}
        />

        <PrimaryButton type="submit" text='Save' />
        <DefaultButton text='Cancel' />
      </form>

    </div>
  );
}

export default FineForm;


