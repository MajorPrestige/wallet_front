import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment';
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

const ModalAddTransactions = ({ toggleModalCancel }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const [date, setDate] = useState(new Date());
  // const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories().then(data => {
      setOptions(data.map(it => ({ value: it._id, label: it.name })));
    });
  }, []);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  // let yesterday = moment().subtract(1, 'day');

  // function valid(current) {
  //   return current.isAfter(yesterday);
  // }

  const validationSchema = yup.object().shape({
    // category: yup.string(),
    // comment: yup.string(),
    sum: yup.number().required(),
  });

  const onSubmit = values => {
    // dispatch();

    const data = {
      type: isChecked,
      date: date.toISOString().slice(0, 10),
      sum: values.sum,
      comment: values.comment,
    };

    if (!isChecked) {
      data.category = selectedOption.value;
    }
    console.log(data);
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
            // category: '',
            sum: '',
            comment: '',
            // date: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormAddTrans onSubmit={handleSubmit}>
              {!isChecked && (
                <LableSelect>
                  <SelectList
                    options={options}
                    getCurrent={setSelectedOption}
                  />
                </LableSelect>
              )}
              <Lable>
                <Inpput
                  type="text"
                  placeholder="0.00"
                  name="sum"
                  value={values.name}
                  onChange={handleChange}
                />
                {touched.sum && errors.sum && <p>помилка</p>}
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
                // isValidDate={valid}
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
                ></InpputComment>
              </LableComment>
              <ButtonAdd type="submit">add</ButtonAdd>
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
