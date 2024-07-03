import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './MenuList.module.css';
import { products } from '../../../data/products';
function MenuList() {
    return (<div className={styles['wrapper']}>
        {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
        })}
    </div>);
}

export default MenuList;