
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import MenuList from './MenuList/MenuList';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/slices/dish.slice';



function Menu() {
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(event.target.value));
    };

    return (<section className={styles['menu']}>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search onChange={handleSearch} placeholder='Enter dish ' />
        </div>
        <MenuList />
    </section>);

}

export default Menu;