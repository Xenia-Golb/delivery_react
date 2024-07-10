import { Link, useNavigate } from 'react-router-dom';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from '../Login/Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors } from '../../redux/slices/form.slice';


function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form.formData);
    const errors = useSelector((state) => state.form.errors);
    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateField({ field: name, value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setErrors());
        if (Object.keys(errors).length === 0) {
            // Proceed with form submission
            console.log('Form submitted:', formData);
        }
    };
    return (
        <div className={styles['login']}>
            <Headling>Sign up</Headling>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Your email</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Your password</label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className={styles['field']}>
                    <label htmlFor="userName">Your name</label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <Button onClick={() => navigate('/')} appearence="big">Sign up</Button>
            </form>
            <div className={styles['links']}>
                <div>Already have an account? </div>
                <Link to="/auth/login">Sign in</Link>
            </div>
        </div>

    );
}

export default Register;