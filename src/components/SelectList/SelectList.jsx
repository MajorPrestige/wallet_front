import { CustomSelect, ChartSelect } from './SelectList.styled';

const SelectList = ({ options, getCurrent, defaultValue, chart, onChange, type, ...another }) => {

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
        placeholder="Select a category"
      />}
    </>
  );
};

export default SelectList;
