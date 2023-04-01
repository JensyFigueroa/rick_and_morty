import styles from '../form/Form.module.css'
import imgLogin from '../../img/login2.jpg'
import { useState } from 'react';
import validate from './validation.js'

export default function Form(props) {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });


    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        setErrors(validate(userData))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData)
    }

    return <div className={styles.login}>
        <div className="avatar">
            <img src={imgLogin} alt="" />
        </div>

        <h2>Login</h2>
        <h3>Bienvenido App Rick & Morty</h3>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.textBox}>
                <input type="email" placeholder='Username' name='username' onChange={handleInputChange} value={userData.username} />
                {errors && <p className={styles.errors}>{errors.username}</p>}
            </div>
            <div className={styles.textBox}>
                <input type="password" placeholder='Password' name='password' onChange={handleInputChange} value={userData.password} />
                {errors && <p className={styles.errors}>{errors.password}</p>}
            </div>

            <button type='submit'>LOGIN</button>

        </form>
    </div>

}