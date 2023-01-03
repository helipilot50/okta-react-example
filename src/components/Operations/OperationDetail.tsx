import {
  DefaultButton,
  PrimaryButton, TextField, DatePicker,
  DayOfWeek, defaultDatePickerStrings,
  Panel,
  Label
} from '@fluentui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Operation } from './Operation';
import { formatDate } from './OpsUtils';


const validationSchema = yup.object({
  amount: yup
    .number()
    .min(1, 'Amount should be of minimum 1 ')
    .max(100000, 'Ammount should be of maximum 100000 ')
    .required('Ammount is required'),

  from: yup
    .string()
    .min(2, 'Account should be of minimum 2 characters length')
    .required('Account is required'),
  to: yup
    .string()
    .min(2, 'Account should be of minimum 2 characters length')
    .required('Account is required'),
  date: yup
    .date().required('Date is required')
    .default(() => new Date()),

});

export function OperationDetail(props: {
  operation?: Operation;
  onDismiss?: (operation: Operation | undefined) => void;
}) {
  // const today = useConst(new Date(Date.now()));
  const formik = useFormik({
    initialValues: {
      from: (props.operation && props.operation.from) || '',
      to: (props.operation && props.operation.to) || '',
      amount: (props.operation && props.operation.amount) || 0,
      date: (props.operation && props.operation.date) || new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      if (props.onDismiss) {
        props.onDismiss({
          id: (props.operation && props.operation.id) || '',
          from: values.from,
          to: values.to,
          amount: values.amount,
          date: values.date,

        });
      }
    },
  });
  return (
    <Panel
      isOpen={true}
      onDismiss={() => {
        if (props.onDismiss)
          props.onDismiss(undefined);
      }}
      type={3}
      customWidth='500px'
      closeButtonAriaLabel='Close'
      headerText='Operation Details'
    // isHiddenOnDismiss={true}
    >
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id='from'
            name='from'
            label='From account'
            placeholder='from account'
            value={formik.values.from}
            onChange={formik.handleChange}
            errorMessage={(formik.touched.from && Boolean(formik.errors.from)) ? formik.errors.from : undefined}
          />
          <TextField
            id='to'
            name='to'
            label='To account'
            placeholder='to account'
            value={formik.values.to}
            onChange={formik.handleChange}
            errorMessage={(formik.touched.to && Boolean(formik.errors.to)) ? formik.errors.to : undefined}
          />
          <TextField
            id='amount'
            name='amount'
            label='Amount'
            placeholder='enter ammount'
            value={formik.values.amount.toString()}
            onChange={formik.handleChange}
            errorMessage={(formik.touched.amount && Boolean(formik.errors.amount)) ? formik.errors.amount : undefined}
          />
          <DatePicker
            label='Date'
            firstDayOfWeek={DayOfWeek.Monday}
            formatDate={formatDate}
            placeholder='Select a date...'
            ariaLabel='Select a date'
            // DatePicker uses English strings by default. For localized apps, you must override this prop.
            strings={defaultDatePickerStrings}
            value={formik.values.date}
            showGoToToday={true}
            onSelectDate={(date: Date | undefined | null) => {
              if (date)
                formik.setFieldValue('date', date);
            }}
            isRequired={formik.touched.date && Boolean(formik.errors.date)}
          />

          <PrimaryButton type='submit' text='Save' />
          <DefaultButton text='Cancel' />
        </form>

      </div>
    </Panel>
  );
}
function useConst(arg0: Date) {
  throw new Error('Function not implemented.');
}

