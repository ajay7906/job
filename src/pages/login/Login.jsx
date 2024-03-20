
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Already have an account?</h2>
                    <p>Your personal job finder is here</p>

                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='password' />


                  
                    <button>Sign In</button>
                    <p>Don’t have an account? <Link to='/register'>Sign Up</Link></p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Your Personal Job Finder</h2>
            </div>
        </div>
    )
}

export default Login