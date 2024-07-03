import { Link } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from '../Login/Login.module.css';


function Register() {
    const submit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        <div className={styles['login']}>
            <Headling>Sign up</Headling>
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Your email</label>
                    <Input id="email" name='email' placeholder='Email' />
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Your password</label>
                    <Input id="password" name='password' type="password" placeholder='Password' />
                </div>
                <div className={styles['field']}>
                    <label htmlFor="name">Your name</label>
                    <Input id="name" name='name' placeholder='Name' />
                </div>
                <Button appearence="big">Sign up</Button>
            </form>
            <div className={styles['links']}>
                <div>Already have an account? </div>
                <Link to="/auth/login">Sign in</Link>
            </div>
        </div>

    );
}

export default Register;