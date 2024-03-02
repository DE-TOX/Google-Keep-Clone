import './SignUp.css';
import signupLogo from '../images/logo-google.png'
import { useState } from 'react';
import { signupUser } from '../services/UserServices'
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [userdetails, setDetails] = useState({ firstName: "", lastName: "", email: "", service: "user", password: "", cpass: "" })
    const [formValid, setFormValid] = useState(true);
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        let isValid = true;

        // npm install react-router-dom

        if (name === 'firstName') {
            // Check if the first name contains only alphabets with no spaces or numbers
            isValid = /^[a-zA-Z]+$/.test(value);
        } else if (name === 'lastName') {
            // Check if the first name contains only alphabets with no spaces or numbers
            isValid = /^[a-zA-Z]+$/.test(value);
        } else if (name === 'email') {
            // Check if the username has a length of at least  5 characters and can include numbers and alphabets
            isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
        } else if (name === 'password') {
            // Check if the password contains numbers, special characters, and alphabets
            isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
        } else if (name === 'cpass') {
            // Check if the confirm password matches the password
            console.log(value);
            isValid = value === userdetails.pass;
        }
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));

        setFormValid(isValid);

        // If the name is 'cpass', explicitly check if it matches 'pass'
        if (name === 'cpass') {
            if (value !== userdetails.pass) {
                setFormValid(false);
            }
        }
    };



    const handleClick = () => {
        if (formValid) {
            signupUser(userdetails);
            console.log(userdetails);
            navigate('/login');

            // Proceed with form submission or other actions
        } else {
            // Show error message or take other appropriate action
            console.log("Form is not valid.");
        }
    };



    return (
        <div className='signUp'>
            <div className='container'>
                <div className='form'>
                    <div className="head">
                        <span><img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="" /></span>
                        <h2>Create your Google Account</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" name="firstName" id="text" className="input" placeholder='First Name*' onChange={handleChange} />
                        <input type="text" name="lastName" id="text" className="input" placeholder='Last Name*' onChange={handleChange} />
                        <div className='email'>
                            <input type="email" name="email" id="text-email" className="input" placeholder='email*' onChange={handleChange} />
                            <label style={{ fontSize: "0.7em" }}>you can use letters, numbers & periods</label>
                            <br />
                            <p className='p1'>Use my current email instead</p>
                            <br />
                        </div>
                        <input type="text" name="password" id="text" className="input" placeholder='Password*' onChange={handleChange} />
                        <input type="text" name="cpass" id="text" className="input" placeholder='Confirm*' onChange={handleChange} />
                        <p className='p1'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className='checkbox'>
                            <input type="checkbox" /><p >Show Password</p>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="create-btn"><a href="/login">Sign in</a></button>
                        <button class="next-btn" onClick={handleClick}>Next</button>

                    </div>
                </div>
                <div className="account-img">
                    <img src={signupLogo} alt="" />
                    <p style={{ fontSize: "0.8em" }} >One account. All of Google working for you</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp