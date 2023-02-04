import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { Formik } from 'formik';
import * as yup from 'yup';

import calendar from '../../images/svgs/calendar.svg';
import SelectList from 'components/SelectList/SelectList';
import {
  Conteiner,
  Title,
  FormAddTrans,
  Lable,
  Inpput,
  ButtonAdd,
  ButtonCancel,
  WrapCheckbox,
  Choice,
  CheckedHand,
  UncheckedHandle,
  StyledPlusIcon,
  StyledMinusIcon,
  LableComment,
  InpputComment,
  CheckIncome,
  CheckExpense,
  CalendarDatetime,
  LableSelect,
} from './../ModalAddTransactions/ModalAddTransaction.styled';
import { addTransaction } from 'redux/transactions/trans-operations';
import { AuthError } from './../Auth/Auth.styled';
import { getLoadingAddTransaction } from 'redux/transactions/trans-selectors';
import LoaderAddTrans from './../Loader/LoaderAddTrans';
import { categorySelectSelector } from '../../redux/categories/categories-selectors.js';

const ModalAddTransactions = ({ toggleModalCancel }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const isLoadingAdd = useSelector(getLoadingAddTransaction);
  const options = useSelector(categorySelectSelector);

  const dispatch = useDispatch();

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) || '' : '';
  };

  useEffect(() => {
    if (isSubmit && !isLoadingAdd) {
      toggleModalCancel();
    }
    if (!isLoadingAdd) setIsSubmit(false);
  }, [isChecked, isLoadingAdd, isSubmit, toggleModalCancel]);

  const getOnChangeSelect = setFieldValue => {
    return value => setFieldValue('select', value.value);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  let yesterday = moment().subtract(0, 'day');
  function valid(current) {
    return current.isBefore(yesterday);
  }

  const validationSchema = yup.object().shape({
    sum: yup.number().positive().required(),
    select: yup.string().required(),
  });

  const onSubmit = values => {
    setIsSubmit(true);
    const data = {
      type: isChecked,
      date: date.toISOString().slice(0, 10),
      sum: values.sum,
      comment: values.comment || '',
    };
    if (!isChecked) {
      data.category = values.select;
    }
    dispatch(addTransaction(data));
  };

  return (
    <>
      <Conteiner>
        <Title>Add transaction</Title>
        <WrapCheckbox>
          <CheckIncome isChecked={isChecked}>Income</CheckIncome>
          <Choice
            onChange={handleChecked}
            checked={!isChecked}
            offColor={'#ffffff'}
            onColor={'#ffffff'}
            handleDiameter={44}
            activeBoxShadow={'null'}
            height={40}
            width={80}
            borderRadius={30}
            checkedHandleIcon={
              <CheckedHand>
                <StyledMinusIcon></StyledMinusIcon>
              </CheckedHand>
            }
            uncheckedHandleIcon={
              <UncheckedHandle>
                <StyledPlusIcon></StyledPlusIcon>
              </UncheckedHandle>
            }
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <CheckExpense isChecked={isChecked}>Expense</CheckExpense>
        </WrapCheckbox>

        <Formik
          initialValues={{
            sum: '',
            select: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
            <FormAddTrans onSubmit={handleSubmit}>
              {!isChecked && (
                <LableSelect>
                  <SelectList
                    name='select'
                    value={defaultValue(options, values.select)}
                    onChange={getOnChangeSelect(setFieldValue)}
                    options={options}
                  />
                  {touched.select && errors.select && (
                    <AuthError>{errors.select}</AuthError>
                  )}
                </LableSelect>
              )}
              <Lable>
                <Inpput
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  name="sum"
                  value={values.name}
                  onChange={handleChange}
                />
                {touched.sum && errors.sum && (
                  <AuthError>{errors.sum}</AuthError>
                )}
              </Lable>
              <CalendarDatetime
                name="date"
                dateFormat="DD.MM.YYYY"
                inputProps={{
                  style: {
                    background: `url(${calendar})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 20px bottom 8px',
                  },
                }}
                timeFormat={false}
                initialValue={date}
                isValidDate={valid}
                value={date}
                onChange={setDate}
                closeOnSelect={true}
              />
              <LableComment>
                <InpputComment
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  value={values.name}
                  onChange={handleChange}
                />
              </LableComment>
              <ButtonAdd disabled={isLoadingAdd} type="submit">
                {isLoadingAdd ? <LoaderAddTrans /> : 'add'}
              </ButtonAdd>
            </FormAddTrans>
          )}
        </Formik>

        <ButtonCancel type="button" onClick={() => toggleModalCancel()}>
          cancel
        </ButtonCancel>
      </Conteiner>
    </>
  );
};

export default ModalAddTransactions;
