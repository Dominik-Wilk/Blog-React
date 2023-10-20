import { useSelector } from 'react-redux';
import { getCategories } from '../../../redux/categoryRedux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const allCategories = useSelector(getCategories);

  return (
    <ul>
      {allCategories.map(category => (
        <Link key={category.id}>{category.name}</Link>
      ))}
    </ul>
  );
};
export default Categories;
