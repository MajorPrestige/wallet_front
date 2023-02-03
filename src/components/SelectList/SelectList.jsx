import { CustomSelect, ChartSelect } from './SelectList.styled';

const SelectList = ({ options, getCurrent, defaultValue, chart }) => {
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
        classNamePrefix={'react-select'}
        onChange={handleChange}
        defaltValue={options[0]}
        options={options}
        placeholder="Select a category"
      />} 
    </>
  );
};

export default SelectList;
