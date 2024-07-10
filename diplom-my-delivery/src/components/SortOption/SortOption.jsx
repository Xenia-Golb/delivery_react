import { useDispatch } from 'react-redux';
import { setSortBy } from '../../redux/slices/dish.slice';
import styles from './SortOption.module.css';

const SortOptions = () => {
    const dispatch = useDispatch();

    const handleSortChange = (event) => {
        dispatch(setSortBy(event.target.value));
    };

    return (
        <div className={styles['sort']}>
            <label htmlFor="sort"></label>
            <select className={styles['sort-select']} id="sort" onChange={handleSortChange}>
                <option defaultChecked value="all">Select</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
};

export default SortOptions;