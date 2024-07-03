import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ id, title, description, price, rating, image }) {
    return (
        <Link to={`/product/${id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{ backgroundImage: `url('${image}') ` }}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>$</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src="/cart-button-icon.svg" alt="add" />
                    </button>
                    <div className={styles['rating']}>
                        {rating}&nbsp;
                        <img src="/star-icon.svg" alt="rating" />
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{title}</div>
                    <div className={styles['description']}>{description}</div>

                </div>

            </div></Link>);
}

export default ProductCard;