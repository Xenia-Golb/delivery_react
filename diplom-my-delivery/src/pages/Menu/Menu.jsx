import { useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';
import MenuList from './MenuList/MenuList';



function Menu() {
    const [searchQuery, setSearchQuery] = useState('');

    return (<section className={styles['menu']}>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Enter dish ' />
        </div>
        <MenuList />
    </section>);

}

export default Menu;