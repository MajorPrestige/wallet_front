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
import { getAllCategories } from 'api/categories/category';
import { addTransaction } from 'redux/transactions/trans-operations';
import { AuthError } from './../Auth/Auth.styled';
import { getLoadingAddTransaction } from 'redux/transactions/trans-selectors';
import LoaderAddTrans from './../Loader/LoaderAddTrans';

const ModalAddTransactions = ({ toggleModalCancel }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isTouchedAdd, setIsTouchedAdd] = useState(false);
  const [isErrorAdd, setIsErrorAdd] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [date, setDate] = useState(new Date());
  const isLoadingAdd = useSelector(getLoadingAddTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories().then(data => {
      setOptions(data.map(it => ({ value: it._id, label: it.name })));
    });
  }, []);

  useEffect(() => {
    if (isSubmit && !isLoadingAdd &&
      (isChecked ? true : !isErrorAdd)) {
      toggleModalCancel();
    }
    if (!isLoadingAdd) setIsSubmit(false);
  }, [isChecked, isErrorAdd, isLoadingAdd, isSubmit, toggleModalCancel]);

  useEffect(() => {
    onChangeSelect();
  }, []);

  const onChangeSelect = selectedOptions => {
    setSelectedOption(selectedOptions);
    setIsErrorAdd(!selectedOptions);
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
  });

  useEffect(() => {
    if (!isChecked && !selectedOption && isTouchedAdd) {
      console.log('Please, select a category');
    }
  }, [isChecked, isTouchedAdd, selectedOption]);

  const onSubmit = values => {
     if (!isChecked && !selectedOption && isTouchedAdd) {
       console.log('Please, select a category');
       return;
     }
    setIsSubmit(true);
    const data = {
      type: isChecked,
      date: date.toISOString().slice(0, 10),
      sum: values.sum,
      comment: values.comment || '',
    };
    if (!isChecked) {
      data.category = selectedOption.value;
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
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormAddTrans onSubmit={handleSubmit}>
              {!isChecked && (
                <LableSelect>
                  <SelectList
                    onBlur={() => setIsTouchedAdd(true)}
                    required
                    options={options}
                    getCurrent={onChangeSelect}
                  />
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
                  <AuthError>Please, enter your sum</AuthError>
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
