import { useState } from 'react';
import { loginUser } from '../services/UserServices';
import { useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
import styles from'./Login.module.css';

function Login() {

    const navigate = useNavigate();

    const [usercredentials, setCredentials] = useState({ email: "", password: "" })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    }
    const handleClick = (event) => {
        event.preventDefault();
        console.log(usercredentials);
        const response = loginUser(usercredentials);
        if (response) {
            navigate("/dashboard/notes")
        }
    };






    return (

        <div className='login'>
            <div class="container-log">
                <div class="top-content">
                    <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="" />
                    <h2>Sign in</h2>
                    <p class="heading">Use your Google Account</p>

                </div>
                <div class={styles.inputs}>


                    <input type="email" name="email" id="email" class={styles.input} onChange={handleChange} />
                    <label for="email" class="input-label">Email or phone</label>
                    <input type="password" name="password" id="password" class={styles.input} onChange={handleChange} />
                    <label for="password" class="input-label-pass">Password</label>

                </div>
                <a href="" class="link-btn">Forgot Password?</a>
                <div class="btn-group">
                    <button class="create-btn"><a href="/">Create account</a></button>
                    <button class="next-btn" onClick={handleClick}>Next</button>

                </div>
            </div>

        </div>
    )
}

export default Login