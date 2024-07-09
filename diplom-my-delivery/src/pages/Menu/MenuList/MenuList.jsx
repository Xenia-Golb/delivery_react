import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
import { products } from '../../../data/products';
// import { useEffect, useState } from 'react';

function MenuList() {
    // const [filteredItems, setFilteredItems] = useState(products);
    // useEffect(() => {
    //     const filtered = products.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    //     setFilteredItems(filtered);
    // }, [products, searchQuery]);

    return (<div className={styles['wrapper']}>
        {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
        })}
    </div>);
}

export default MenuList;