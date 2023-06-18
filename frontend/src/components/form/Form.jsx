import styles from '../form/Form.module.css'
// import imgLogin from '../../img/login2.jpg'
import rickMorty from '../../img/rickandmorty.png'
import { useEffect, useState } from 'react';
import validate from './validation.js'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logIn, postUser } from '../../redux/actions/index'

export default function Form(props) {
    const dispacth = useDispatch()

    const [login, setLogin] = useState({ email: '', password: '' });
    const [logUp, setLogUp] = useState({ nameUser: '', email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [panelActive, setPanelActive] = useState(false)

    const navigate = useNavigate();

    const access = useSelector(state => state.access)

    const handleInputChange = (e) => {
        // console.log(e.target.name, e.target.value)
        if (e.target.name === 'nameUser' || logUp.nameUser) {
            // console.log('handle LogUp', e.target.value)
            setLogUp({ ...logUp, [e.target.name]: e.target.value })
            setErrors(validate(login))
        } else {
            // console.log('handle logUp')
            setLogin({ ...login, [e.target.name]: e.target.value })
            setErrors(validate(login))
        }
    }


    const handleChangePanelActive = () => {
        setPanelActive(!panelActive)
        if (login) setLogin({ email: '', password: '' })

        if (logUp) setLogUp({ nameUser: '', email: '', password: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // props.login(userData)

        if (login.name & login.password) {
            dispacth(logIn(login))
            setLogin({ email: '', password: '' })
        }

        if (logUp.nameUser.length & logUp.email.length & logUp.password.length) {
           
            dispacth(postUser(logUp))
            setLogUp({ nameUser: '', email: '', password: '' })
        }
    }

    useEffect(() => {
        if (access) {
            navigate('/home');
        }
    }, [access])

    return (
        <div className={styles.login}>

            <img src={rickMorty} alt="" />

            <div className={`${styles.container} ${panelActive ? styles.rightPanelActive : ''}`}>
                {/*  Sign Up  */}
                <div className={`${styles.containerForm} ${styles.containerSignup}`}>
                    <form action="#" className={styles.form} id="form1" onSubmit={handleSubmit}>
                        <h2 className={styles.formTitle}>Sign Up</h2>
                        <input type="text" placeholder="Your name" className={styles.input} name='nameUser' onChange={handleInputChange} value={logUp.nameUser} required/>
                        <input type="email" placeholder="Email" className={styles.input} name='email' onChange={handleInputChange} value={logUp.email} required/>
                        <input type="password" placeholder="Password" className={styles.input} name='password' onChange={handleInputChange} value={logUp.password} required/>
                        <button className={styles.btn} type='submit'>Sign Up</button>
                    </form>
                </div>

                {/* Sign In */}
                <div className={`${styles.containerForm} ${styles.containerSignin} ${panelActive && styles.hideSignIn}`}>
                    <form action="#" className={styles.form} id="form2" onSubmit={handleSubmit}>
                        <h2 className={styles.formTitle}>Sign In</h2>
                        <input type="email" placeholder="Email" className={styles.input} name='email' onChange={handleInputChange} value={login.email} required/>
                        {errors && <p className={styles.errors}>{errors.email}</p>}
                        <input type="password" placeholder="Password" className={styles.input} name='password' onChange={handleInputChange} value={login.password} required/>
                        {errors && <p className={styles.errors}>{errors.password}</p>}
                        <Link to="#" className={styles.link}>Forgot your password?</Link>
                        <button className={styles.btn} type='submit'>Sign In</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className={styles.containerOverlay}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <button className={styles.btn} id="signIn" onClick={handleChangePanelActive}>Sign In</button>
                        </div>
                        <div className={`${styles.overlayPanel}  ${styles.overlayRight}`}>
                            <button className={styles.btn} id="signUp" onClick={handleChangePanelActive}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}