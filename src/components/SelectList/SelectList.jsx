import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { CustomSelect, ChartSelect } from './SelectList.styled';
import { useTranslation } from "react-i18next";

const SelectList = ({ options, getCurrent, defaultValue, chart, onChange, type, ...another }) => {
  const { t } = useTranslation();
  const [lng, setLng] = useState('');

  const currentLanguage = useSelector(state => state.language.language);
  useEffect(()=>{
    setLng(currentLanguage);
  }, [lng, currentLanguage, defaultValue]);

  const handleChange = selectedOption => {
    getCurrent(selectedOption);
  };


  
  return (
    <>
      {chart ?
      <ChartSelect
        classNamePrefix={'react-select'}
        options={options}
        onChange={handleChange}
        defaultValue={defaultValue}
      /> :
      <CustomSelect
        {...another}
        classNamePrefix={'react-select'}
        onChange={onChange}
        options={options}
        placeholder={`${t('reactSelect.categoryPlaceholder')}`}
      />}
    </>
  );
};

export default SelectList;
