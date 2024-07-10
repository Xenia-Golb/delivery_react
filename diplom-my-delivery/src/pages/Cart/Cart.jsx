import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import Headling from '../../components/Headling/Headling';
import CartItem from '../../components/CartItem/CartItem';
import { products } from '../../data/products';
import Button from '../../components/Button/Button';
import { clean } from '../../redux/slices/cart.slice';

const DELIVERY_FEE = 3.5;
function Cart() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartItem.items);
    const total = items.map(i => {
        const product = products.find(p => p.id === i.id);
        if (!product) {
            return 0;
        }
        return i.count * product.price;
    }).reduce((acc, i) => acc += i, 0);
    const checkout = () => {
        dispatch(clean());
        navigate('/success');
    };

    return (<section >
        <Headling className={styles['headling']}>Cart</Headling>
        <div className={styles['cart']}>
            <div className="cart-left">
                {items.map(i => {
                    const product = products.find((item) => item.id === i.id);
                    if (!product) {
                        return;
                    }
                    return <CartItem count={i.count} key={product.id} {...product} />;
                })}
                <div className={styles['line']}>
                    <div className={styles['text']}>Total</div>
                    <div className={styles['price']}>{total}&nbsp;<span>$</span></div>
                </div>
                <hr className={styles['hr']} />
                <div className={styles['line']}>
                    <div className={styles['text']}>Delivery</div>
                    <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>$</span></div>
                </div>
                <hr className={styles['hr']} />
                <div className={styles['line']}>
                    <div className={styles['text']}>Grand total <span className={styles['total-count']}>({items.length})</span></div>
                    <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span>$</span></div>
                </div>
                <div className={styles['checkout']}>
                    <Button appearence="big" onClick={checkout}>Checkout</Button>
                </div>
            </div>

            <div className="cart-right"><img src="/big-cart.svg" alt="cart" /></div>
        </div>
    </section>);
}

export default Cart;