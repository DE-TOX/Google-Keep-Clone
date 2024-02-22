import './SignUp.css';
import signupLogo from '../../images/logo-google.png'
import { useState } from 'react';






function SignUp() {
    const [userdetails, setDetails] = useState({ fname: "", lname: "", uname: "", pass: "", cpass: "" })
    const [validations, setValidation] = useState({ fname: true, lname: true, uname: true, pass: true, cpass: true })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
        validateInput(name, value)
    };

    const validateInput = (name, value) => {
        let isValid = true;
        let regex;
    
        switch (name) {
            case 'fname':
            case 'lname':
                regex = /^[A-Za-z]+$/;
                isValid = regex.test(value.trim());
                break;
            case 'uname':
                isValid = value.trim().length >= 3;
                break;
            case 'pass':
                isValid = value.length >= 8;
                break;
            case 'cpass':
                
                isValid = value === userdetails.pass;
                break;
            default:
                break;
        }
        setValidation(prevValidation => ({
            ...prevValidation,
            [name]: isValid
        }));
    };
    const handleClick = () => {
        const isValid = Object.values(validations).every(v => v);
        if (!isValid) {
            alert('Please correct the errors in the form.');
            return;
        }

        console.log(userdetails)
    }


    return (
        <div className='signUp'>
            <div className='container'>
                <div className='form'>
                    <div className="head">
                        <span><img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="" /></span>
                        <h2>Create your Google Account</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" name="fname" id="text" className="input" placeholder='First Name*' onChange={handleChange} />
                        <input type="text" name="lname" id="text" className="input" placeholder='Last Name*' onChange={handleChange} />
                        <div className='username'>
                            <input type="text" name="uname" id="text-username" className="input" placeholder='username*' onChange={handleChange} />
                            <label style={{ fontSize: "0.7em" }}>you can use letters, numbers & periods</label>
                            <br />
                            <p className='p1'>Use my current email instead</p>
                            <br />
                        </div>
                        <input type="text" name="pass" id="text" className="input" placeholder='Password*' onChange={handleChange} />
                        <input type="text" name="cpass" id="text" className="input" placeholder='Confirm*' />
                        <p className='p1'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className='checkbox'>
                            <input type="checkbox" /><p >Show Password</p>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="create-btn"><a href="/login">Sign in insted</a></button>
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