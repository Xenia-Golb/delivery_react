import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
import { useSelector } from 'react-redux';

function MenuList() {
    const dishes = useSelector((state) => state.dishes.dishes);
    const searchQuery = useSelector((state) => state.dishes.searchQuery);
    const filteredDishes = dishes.filter((dish) =>
        dish.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<div className={styles['wrapper']}>
        {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
                <ProductCard key={dish.id} {...dish} />
            ))
        ) : (
            <div className={styles['no-dish']}>No dishes found</div>
        )}
    </div>);
}

export default MenuList;