import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
import { useSelector } from 'react-redux';

function MenuList() {
    const dishes = useSelector((state) => state.dishes.dishes);
    const searchQuery = useSelector((state) => state.dishes.searchQuery);
    const sortBy = useSelector((state) => state.dishes.sortBy);

    const filteredDishes = dishes
        .filter((dish) =>
            dish.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'price') {
                return a.price - b.price;
            }
            if (sortBy === 'rating') {
                return b.rating - a.rating;
            }
            return 0;
        });

    return (<div className={styles['wrapper']}>
        {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
                <ProductCard key={dish.id} {...dish} />
            ))
        ) : (
            <div className={styles['no-dish']}>No dishes found
                <img src="./no-dish.svg" alt="sad" />
            </div>
        )}
    </div>);
}

export default MenuList;