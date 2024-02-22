import './SignUp.css';
import signupLogo from '../../images/logo-google.png'
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <div className='signUp'>
            <div className='container'>
                <div className='form'>
                    <div className="head">
                        <span><img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="" /></span>
                        <h2>Create your Google Account</h2>
                    </div>
                    <div className="inputs">
                        <input type="text" name="" id="text" className="input" placeholder='First Name*' />
                        <input type="text" name="" id="text" className="input" placeholder='Last Name*' />
                        <div className='username'>
                            <input type="text" name="" id="text-username" className="input" placeholder='username*' />
                            <label style={{ fontSize: "0.7em" }}>you can use letters, numbers & periods</label>
                            <br />
                            <p className='p1'>Use my current email instead</p>
                            <br />
                        </div>
                        <input type="text" name="" id="text" className="input" placeholder='Password*' />
                        <input type="text" name="" id="text" className="input" placeholder='Confirm*' />
                        <p className='p1'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className='checkbox'>
                            <input type="checkbox" /><p >Show Password</p>
                        </div>
                    </div>
                    <div class="btn-group">
                        <button class="create-btn"><a href = "/login">Sign in insted</a></button>
                        <button class="next-btn">Next</button>

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