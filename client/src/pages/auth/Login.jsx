import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo-white.png';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { toastMsg } from '../../utils/toastAlert';
import { loginUser } from '../../features/auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgEmpty } from '../../features/auth/authSlice';

const login = () => {
  const dispatch = useDispatch();
  const { error, message, userData } = useSelector((state) => state.authStore);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  // input change
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // when user submit form in login
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = input;

    if (!email || !password) {
      toastMsg('All fields are required');
    } else {
      dispatch(loginUser(input));
    }
  };

  useEffect(() => {
    if (error) {
      toastMsg(error);
      dispatch(setMsgEmpty());
    }
    if (message) {
      toastMsg(message, 'success');
      dispatch(setMsgEmpty());
    }
    if (userData) {
      navigate('/');
    }
  }, [error, message, userData]);

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={Logo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        value={input.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={input.password}
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="text-center forgotpass">
                    <Link to="/forgot">Forgot Password?</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
                    <span>Login with</span>
                    <a href="#" className="facebook">
                      <span>
                        <FaFacebook />
                      </span>
                    </a>
                    <a href="#" className="google">
                      <span>
                        <FaGoogle />
                      </span>
                    </a>
                  </div>
                  {/* <!-- /Social Login --> */}

                  <div className="text-center dont-have">
                    Don’t have an account? <Link to="/register">Register</Link>
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

export default login;
