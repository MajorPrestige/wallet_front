import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { Formik } from 'formik';
import * as yup from 'yup';

import calendar from '../../images/svgs/calendar.svg';

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
} from './../ModalAddTransactions/ModalAddTransaction.styled';

const ModalAddTransactions = ({ toogleModalCancel }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const [date, setDate] = useState(new Date());
  // const dispatch = useDispatch();

  useEffect(() => {
    axios('/categories').then(data => {
      setOptions(
        data.data.data.result.map(it => ({ value: it._id, label: it.name })),
      );
    });
  }, []);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  let yesterday = moment().subtract(1, 'day');

  function valid(current) {
    return current.isAfter(yesterday);
  }

  const validationSchema = yup.object().shape({
    date: yup.date().required(),
    type: yup.string().required,
    category: yup.string(),
    comment: yup.string(),
    sum: yup.number().required(),
  });

  const onSubmit = values => {
    // dispatch();
    const data = {
      category: selectedOption.value,
      date: date.toISOString().slice(0, 10),
      sum: values.sum,
      comment: values.comment,
    };
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
            category: '',
            sum: '',
            date: '',
          }}
          // validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <FormAddTrans onSubmit={handleSubmit}>
              {!isChecked && (
                <Lable>
                  <Select
                    name="category"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Lable>
              )}
              <Lable>
                <Inpput
                  type="text"
                  placeholder="0.00"
                  name="sum"
                  value={values.name}
                  onChange={handleChange}
                />
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

        <ButtonCancel type="button" onClick={() => toogleModalCancel()}>
          cancel
        </ButtonCancel>
      </Conteiner>
    </>
  );
};

export default ModalAddTransactions;
