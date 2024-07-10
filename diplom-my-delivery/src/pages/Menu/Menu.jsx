
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import MenuList from './MenuList/MenuList';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/slices/dish.slice';
import SortOptions from '../../components/SortOption/SortOption';
import { useState } from 'react';



function Menu() {
    const dispatch = useDispatch();
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    const handleButtonClick = () => {
        setIsDetailVisible(!isDetailVisible);
    };
    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(event.target.value));
    };

    return (<section className={styles['menu']}>
        <div className={styles['head']}>
            <Headling className={styles['menu-head']}>
                <button className={styles['menu-button']} >
                    <img src="/menu.svg" alt="menu" onClick={handleButtonClick}></img>
                </button>
                Menu
            </Headling>
            {isDetailVisible && <SortOptions />}
            <Search onChange={handleSearch} placeholder='Enter dish ' />
        </div>
        <MenuList />
    </section>);

}

export default Menu;