import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-white.png';

const Forgot = () => {
  return (
    <>
      <div class="main-wrapper login-body">
        <div class="login-wrapper">
          <div class="container">
            <div class="loginbox">
              <div class="login-left">
                <img class="img-fluid" src={Logo} alt="Logo" />
              </div>
              <div class="login-right">
                <div class="login-right-wrap">
                  <h1>Forgot Password?</h1>
                  <p class="account-subtitle">Enter your email to get a password reset link</p>

                  {/* <!-- Form --> */}
                  <form action="#">
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Email" />
                    </div>
                    <div class="form-group mb-0">
                      <button class="btn btn-primary btn-block" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div class="text-center dont-have">
                    Remember your password? <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
