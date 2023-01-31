import { Formik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
//
// import { getStatistic } from 'redux/transactions/trans-selectors';
// import { statistic } from 'redux/transactions/trans-operations';

import { FormContainer, StyledForm, StyledField } from './DiagramForm.styled';

const DiagramForm = ({setDate}) => {
  const onChange = ({target}) => {
    setDate( prevState => {
      return {...prevState, [target.name]: target.value};
    });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ month: '', year: '' }}
      >
        {props => (
          <StyledForm>
            <StyledField name="month" as="select" onChange={onChange} >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7" disabled>July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </StyledField>
            <StyledField name="year" as="select" onChange={onChange} defaultValue={"2023"}>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </StyledField>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DiagramForm;
