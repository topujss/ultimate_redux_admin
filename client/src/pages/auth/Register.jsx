import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-white.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
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
                  <h1>Register</h1>
                  <p class="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form action="#">
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Name" />
                    </div>
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Confirm Password" />
                    </div>
                    <div class="form-group mb-0">
                      <button class="btn btn-primary btn-block" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div class="login-or">
                    <span class="or-line"></span>
                    <span class="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div class="social-login">
                    <span>Register with</span>
                    <Link to="#" className="facebook">
                      <span>
                        <FaFacebook />
                      </span>
                    </Link>
                    <Link to="#" className="google">
                      <span>
                        <FaGoogle />
                      </span>
                    </Link>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div class="text-center dont-have">
                    Already have an account? <Link to="/login">Login</Link>
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

export default Register;
