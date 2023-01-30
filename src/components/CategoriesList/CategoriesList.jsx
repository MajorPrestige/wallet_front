import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/categories/category';
import Select from 'react-select';
import { CustomSelect } from './CategoriesList.styled';

const CategoriesList = () => {
  const [categories, setCategories] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = selectedOption => {
    setCurrentCategory(selectedOption);
    setIsLoading(false);
  };

  useEffect(() => {
    const options = [];
    getAllCategories().then(res => {
      const list = res.data.result;
      list.map(category => {
        const option = {
          value: category.name,
          label: category.name,
        };
        return options.push(option);
      });
    });
    setCategories(options);
  }, []);

  return (
    <>
      <CustomSelect
        classNamePrefix={'react-select'}
        onChange={handleChange}
        defaltValue={currentCategory}
        options={categories}
        isLoading={isLoading}
        placeholder="Select a category"
      />
    </>
  );
};

export default CategoriesList;
