import { Formik } from 'formik';

import SelectList from 'components/SelectList/SelectList';
import { FormContainer, StyledForm } from './DiagramForm.styled';
import { monthNames } from '../../../styles/Variables';

const DiagramForm = ({ setDate, date, months, years }) => {


  const optionsMonths = months.map((month, i) => ({
    value: i + 1,
    isDisabled: !month,
    label: monthNames[i],
  }));

  const setMonth = e => {
    setDate(prevState => {
      return { ...prevState, month: e.value };
    });
  };

  const optionsYears = years
    .reverse()
    .map(year => ({ value: year, label: year }));
  const setYear = e => {
    setDate(prevState => {
      return { ...prevState, year: e.value };
    });
  };

  return (
    <FormContainer>
      <Formik initialValues={{ month: '', year: '' }}>
        {props => (
          <StyledForm>
            <SelectList
              options={optionsMonths}
              chart
              defaultValue={{
                label: monthNames[date.month - 1],
                value: date.month,
              }}
              getCurrent={setMonth}
            />
            <SelectList
              options={optionsYears}
              chart
              defaultValue={{
                label: date.year,
                value: date.year,
              }}
              getCurrent={setYear}
            />
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DiagramForm;