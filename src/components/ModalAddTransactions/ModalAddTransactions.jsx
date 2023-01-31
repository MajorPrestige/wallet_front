import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import Switch from 'react-switch';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Conteiner,
  Title,
  FormAddTrans,
  Lable,
  Inpput,
  ButtonAdd,
  ButtonCancel,
} from './../ModalAddTransactions/ModalAddTransaction.styled';

const options = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'salfe care', label: 'Salfe care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'enterteintmen', label: 'Enterteintmen' },
];

const ModalAddTransactions = ({ toogleModalCancel }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [comment, setIsComment] = useState('');
  // const [sum, setSum] = useState('');
  const [date, setDate] = useState(new Date());
  // const dispatch = useDispatch();
console.log(selectedOption);
console.log(date);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  // const handleChange = e => {
  //   const { value } = e.target;
  //   if (e.target.name === 'sum') {
  //     setSum(value);
  //   }
  //   if (e.target.name === 'comment') {
  //     setIsComment(value);
  //   }
  // };

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
    console.log(values);
  };
  return (
    <>
      <Conteiner>
        <Title>Add transaction</Title>
        <Switch onChange={handleChecked} checked={isChecked} />
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
                  select a category
                  <Select
                    name="category"
                    value={values.name}
                    // defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    // onChange={handleChange}
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
                  // value={sum}
                  onChange={handleChange}
                ></Inpput>
              </Lable>
              <Datetime
                name="date"
                dateFormat="DD.MM.YYYY"
                inputProps={{
                  style: { color: 'red' },
                }}
                timeFormat={false}
                initialValue={date}
                isValidDate={valid}
                value={values.name}
                // value={date}
                // onChange={setDate}
                onChange={handleChange}
              />
              <Lable>
                <Inpput
                  type="text"
                  name="comment"
                  placeholder="comment"
                  // value={comment}
                  value={values.name}
                  onChange={handleChange}
                ></Inpput>
              </Lable>
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
