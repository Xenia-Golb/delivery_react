import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';

function Login() {

    const OnSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (<div className={styles['login']}  >
        <Headling>Sign in</Headling>
        <form className={styles['form']} onSubmit={OnSubmitForm}>
            <div className={styles['field']}>
                <label htmlFor="email">
                    Your email
                </label>
                <Input
                    name="email"
                    id="email"
                    placeholder="example@mail.com" />
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">
                    Your password
                </label>
                <Input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="password" />
            </div>
        </form>
        <div className={styles['links']}>
            <Button onClick={OnSubmitForm} appearence='big'>Sign in</Button>
            <div>No account? </div>
            <Link to="/auth/register">Sign up</Link>
        </div>
    </div>);
}

export default Login;