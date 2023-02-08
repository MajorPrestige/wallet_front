import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import SelectList from 'components/SelectList/SelectList';
import { FormContainer, StyledForm } from './DiagramForm.styled';
import { monthNamesEn, monthNamesUa } from '../../../styles/Variables';

const DiagramForm = ({ setDate, date, months, years }) => {
  const [lng, setLng] = useState('');

  const currentLanguage = useSelector(state => state.language.language);

  useEffect(() => {
    setLng(currentLanguage);
  }, [lng, currentLanguage]);

  const currentMonthNames = i => {
    if (currentLanguage === 'ua') {
      return monthNamesUa[i];
    }

    return monthNamesEn[i];
  };

  const optionsMonths = months.map((month, i) => ({
    value: i + 1,
    isDisabled: !month,
    label: currentMonthNames(i),
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

  const defaultMonthValue = {
    label: currentMonthNames(date.month - 1),
    value: date.month,
  };

  return (
    <FormContainer>
      <Formik initialValues={{ month: '', year: '' }}>
        <StyledForm>
          <SelectList
            options={optionsMonths}
            chart
            defaultValue={defaultMonthValue}
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
      </Formik>
    </FormContainer>
  );
};

export default DiagramForm;
