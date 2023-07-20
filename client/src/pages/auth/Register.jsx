import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-white.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authApiSlice';
import { toastMsg } from '../../utils/toastAlert';
import { setMsgEmpty } from '../../features/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.authStore);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  // input change
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // when user submit form in register
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = input;

    if (!name || !email || !password || !cpassword) {
      toastMsg('All fields are required');
    } else if (password !== cpassword) {
      toastMsg('Password not match');
    } else {
      // send data to register an user
      dispatch(registerUser({ name, email, password }));

      setInput({
        name: '',
        email: '',
        password: '',
        cpassword: '',
      });
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
  }, [error, message]);

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
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {/* <!-- Form --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={input.cpassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Form --> */}

                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  {/* <!-- Social Login --> */}
                  <div className="social-login">
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

                  <div className="text-center dont-have">
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
