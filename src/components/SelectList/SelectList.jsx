import { CustomSelect } from './SelectList.styled';

const SelectList = ({ options, getCurrent, type }) => {
  const handleChange = selectedOption => {
    getCurrent(selectedOption);
  };

  return (
    <>
      <CustomSelect
        classNamePrefix={'react-select'}
        onChange={handleChange}
        defaltValue={options[0]}
        options={options}
        placeholder="Select a category"
      />
    </>
  );
};

export default SelectList;
