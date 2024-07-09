import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../../reducers/cart.slice';


function CartItem({ id, image, title, price, count }) {
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(addItem(id));
    };

    const descrease = () => {
        dispatch(removeItem(id));
    };

    const remove = () => {
        dispatch(deleteItem(id));
    };



    return (<div className={styles['item']}>
        <div className={styles['image']}
            style={{ backgroundImage: `url('${image}')` }}></div>
        <div className={styles['description']}>
            <div className={styles['name']}> {title}</div>
            <div className={styles['price']}> {price}&nbsp; $</div> </div>
        <div className={styles['actions']}>
            <button className={styles['minus']} onClick={descrease}> <img src="/minus-icon.svg" alt="Delete" /> </button>
            <div className={styles['number']}> {count}</div>
            <button className={styles['plus']} onClick={increase}> <img src="/plus-icon.svg" alt="Add" /> </button>
            <button className={styles['remove']} onClick={remove}> <img src="/delete-icon.svg" alt="Remove all" /> </button> </div>

    </div>
    );
}

export default CartItem;