import { Formik } from 'formik';

import { FormContainer, StyledForm, StyledField } from './DiagramForm.styled';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DiagramForm = ({ setDate, date, months, years }) => {
  const onChange = ({ target }) => {
    setDate(prevState => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  return (
    <FormContainer>
      <Formik initialValues={{ month: '', year: '' }}>
        {props => (
          <StyledForm>
            <StyledField name="month" as="select" onChange={onChange} defaultValue={monthNames[date.month]}>
              {months.map((month, i) => (
                <option key={i} value={i + 1} disabled={!month}>{monthNames[i]}</option>
              ))}
            </StyledField>
            <StyledField
              name="year"
              as="select"
              onChange={onChange}
            >
              {years.reverse().map((year, i) => (
                <option key={i} value={year}>{year}</option>
              ))}
            </StyledField>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DiagramForm;
