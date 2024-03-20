
import { useState } from 'react'
import styles from './Register.module.css'
import { Link } from 'react-router-dom'

function Register() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        mobile:""
        
      
    })
    const  [checkedValue, setCheckedValue] = useState(false)
    const onChangeValue = (e)=>{
        setFormData({...formData, 
             [e.target.name]:e.target.value,
            })

    }
    const onCheckValue = ()=>{
        if (checkedValue===false) {
            setCheckedValue(true)

            
        }
        else{
            setCheckedValue(false)
        }
        
    }
    console.log(checkedValue);
    console.log(formData);
    console.log('hhhg');

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Create an account</h2>
                    <p>Your personal job finder is here</p>
                    <input type="text" placeholder='name' name='name' onChange={onChangeValue}/>
                    <input type="text" placeholder='email' name='email' onChange={onChangeValue}/>
                    <input type="text" placeholder='password' name='password' onChange={onChangeValue}/>
                    <input type="text" placeholder='mobile' name='mobile' onChange={onChangeValue}/>

                    <div className={styles.checkbox}>
                        <input type="checkbox" onChange={onCheckValue}  name='checked'/>
                        <label >By creating an account, I agree to our terms of use and privacy policy</label><br></br>

                    </div>
                    <button>Create Account</button>
                    <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                </div>
            </div>
            <div className={styles.right}>
            <h2>Your Personal Job Finder</h2>
            </div>
        </div>
    )
}

export default Register