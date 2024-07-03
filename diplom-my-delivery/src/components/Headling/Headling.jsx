import styles from './Headling.module.css';
import cn from 'classnames';

function Headling({ children, className, ...props }) {
    return (
        <h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
    );
}

export default Headling;