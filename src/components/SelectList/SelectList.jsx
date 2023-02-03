import { CustomSelect } from './SelectList.styled';

const SelectList = ({ options, getCurrent, onChange, type, ...another }) => {
  const handleChange = selectedOption => {
    getCurrent(selectedOption);
  };

  return (
    <>
      <CustomSelect
        {...another}
        classNamePrefix={'react-select'}
        onChange={handleChange}
        options={options}
        placeholder="Select a category"
      />
    </>
  );
};

export default SelectList;
