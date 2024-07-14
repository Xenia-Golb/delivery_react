import { Link } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import styles from './Contacts.module.css';
import MapComponent from '../../components/Map/Map';

function Contacts() {
    return (<section className={styles['contacts']}>
        <Headling className={styles['headling']} >Contacts</Headling>
        <div className={styles['container']}>
            <div className={styles['contacts']}>
                <div className={styles['contacts-tit']}>HERE WE ARE
                    <span className={styles['contacts-info']}> 358 West 58th. Street, 10019</span></div>
                <div className={styles['contacts-tit']}>
                    WE ARE OPEN
                    <span className={styles['contacts-info']}> every day from
                        8 a.m. to 10 p.m.</span>
                </div>
                <div className={styles['contacts-tit']}>
                    CALL US
                    <span className={styles['contacts-info']}> +910115039944448</span>
                </div>
                <div className={styles['contacts-tit']}>
                    SAY HELLO
                    <span className={styles['contacts-info']}>hello@funnyflakes.com</span>
                </div>
                <div className={styles['contacts-tit']}>
                    FOLLOW US
                    <Link to={'https://t.me/xenia_golb'} ><img src="/telegram.svg" alt="telegram" /></Link>
                </div>
            </div>
            <MapComponent />
        </div>

    </section>);
}

export default Contacts;