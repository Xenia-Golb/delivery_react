
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useSelector } from 'react-redux';





function Layout() {
    const items = useSelector(state => state.cartItem.items);
    const navigate = useNavigate();


    return (<div className={styles['layout']}>
        <div className={styles['sidebar']}>

            <div className={styles['user']}>
                <img className={styles['avatar']} src="/avatar.svg" alt="avatar" />
                <div className={styles['name']}>Mrs. Golbraykh</div>
                <div className={styles['email']}>Meow@ya.ru</div>
            </div>

            <div className={styles['menu']}>
                <NavLink className={({ isActive }) => cn(styles['link'],
                    {
                        [styles.active]: isActive
                    }
                )} to='/'>
                    <img src="/menu-icon.svg" alt="logo" />
                    Menu</NavLink>
                <NavLink className={({ isActive }) => cn(styles['link'],
                    {
                        [styles.active]: isActive
                    }
                )} to='/cart'>
                    <img src="/cart-icon.svg" alt="logo" />
                    Cart  <span className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span>  </NavLink>
                <NavLink className={({ isActive }) => cn(styles['link'],
                    {
                        [styles.active]: isActive
                    }
                )} to='/contacts'>
                    <img src="/contacts.svg" alt="logo" />
                    Contacts</NavLink>
            </div>

            <Button onClick={() => navigate('/auth/login')} className={styles['exit']}>
                <img src="/exit-icon.svg" alt="exit" />
                Выход
            </Button>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>);
}
export default Layout;


