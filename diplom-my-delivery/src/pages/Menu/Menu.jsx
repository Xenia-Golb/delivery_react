import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import MenuList from './MenuList/MenuList';

function Menu() {
    return (<section className={styles['menu']}>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search placeholder='Enter dish ' />
        </div>
        <MenuList />
    </section>);

}

export default Menu;