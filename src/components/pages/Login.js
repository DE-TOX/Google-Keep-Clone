import './Login.css';

function Login() {
    return (
        <div className='login'>
            <div class="container-log">
                <div class="top-content">
                    <img src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png" alt="" />
                    <h2>Sign in</h2>
                    <p class="heading">Use your Google Account</p>

                </div>
                <div class="inputs">
                    <input type="email" name="" id="email" class="input" />
                    <label for="email" class="input-label">Email or phone</label>
                    <input type="password" name="" id="password" class="input" />
                    <label for="password" class="input-label-pass">Password</label>

                </div>
                <a href="" class="link-btn">Forgot Password?</a>
                <div class="btn-group">
                    <button class="create-btn"><a href="/">Create account</a></button>
                    <button class="next-btn">Next</button>

                </div>
            </div>

        </div>
    )
}

export default Login