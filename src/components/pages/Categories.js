import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const { value, isLoading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <section className="categoriesSection">
      {isLoading ? <h1>Loading...</h1> : <button type="button" onClick={() => dispatch(checkStatus())} className="checkStatusButton">Check Status</button>}
      <h2>{value}</h2>
    </section>
  );
};

export default Categories;
