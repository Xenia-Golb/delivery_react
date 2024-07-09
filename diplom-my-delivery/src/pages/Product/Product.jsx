import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import Headling from '../../components/Headling/Headling';
import Button from '../../components/Button/Button';
import styles from './Product.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../../reducers/cart.slice';

function Product() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addProduct = (e) => {
        e.preventDefault();
        dispatch(addItem(product.id));
        navigate('/cart');
    };

    return (<>
        <div className={styles['header']} >
            <button onClick={() => navigate(-1)} className={styles['back-btn']} ><img src="/left.svg" alt="back" /></button>
            <Headling>{product.title}</Headling>
            <Button onClick={addProduct} appearance='primary'> <img src="/product-cart.svg" alt="cart" />&nbsp; Add to cart</Button></div>
        <div className={styles['product']}>
            <img className={styles['image']} src={product.image} alt={product.title} />
            <div className={styles['info']}>
                <div>{product.description}</div>
                <div >Price:<span className={styles['price']}>{product.price}&nbsp;
                    <span className={styles['currency']}>$</span></span></div>
                <div>Rating:<span className={styles['rating']}>{product.rating}&nbsp;
                    <img src="/star-icon.svg" alt="rating" /></span></div>
                <div className={styles['ingredients']}>Ingredients:{product.ingredients.map((i, index) => {
                    return <li key={index}>{i}</li>;
                })}
                </div>
            </div>
        </div>
        <div className={styles['recommendations']}>
            <h3 className={styles['title']}>Related products</h3>
            <div className={styles['list']}>
                {products.filter((item) => item.id !== product.id).slice(0, 3).map((item) => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </div>
        </div>

    </>);
}

export default Product;