const User = require('../models/User');
const asyncHandler = require('express-async-handler'); // use with those has api call not to all
const { compareSync, hash } = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');
/** Make accessToken by node
 * => openssl rand - base64 32
 * => node > require('crypto').randomBytes(64).toString('hex')
 */

/**
 * @function userLogin
 * @desc user login feature
 * @route POST api/v1/auth/login
 * @access public
 */
const userLogin = asyncHandler(async (req, res) => {
  // get email from request
  const { email, password } = req.body;

  if (!email || !password) res.status(400).json({ message: 'Input is missing' });

  // check if user exists
  const userExist = await User.findOne({ email });
  if (!userExist) res.status(400).json({ message: 'User already exists' });

  // check password using bcrypt
  const passCheck = await compareSync(password, userExist.password);
  if (!passCheck) res.status(400).json({ message: "Passwords didn't match" });

  // create access token to validate user using jwt
  const token = sign({ email: userExist.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });
  res.cookie('access_token', token, {
    httpOnly: true,
    secure: process.env.APP_ENV === 'development' ? false : true,
  });

  // create refresh token to validate user using jwt
  const refreshToken = sign(
    {
      email: userExist.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    }
  );
  res.cookie('refresh_token', refreshToken);

  res.status(201).json({ token, userData: userExist, message: 'User successfully login' });
});
/**
 * @desc refresh token request
 * @route GET /refresh
 * @access public
 */
const refreshToken = (req, res) => {
  // get token from cookie
  const cookies = req.cookies;

  !cookies?.refresh_token ? res.status(400).json({ message: 'Invalid token request' }) : res.status(200);

  const token = cookies.refresh_token;

  // verify with jwt verification
  verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decode) => {
      err ? res.status(401).json({ message: 'Not a valid token' }) : res.status(200);

      const tokenUser = await User.findOne({ email: decode.email });
      !tokenUser ? res.status(404).json({ message: 'User not Found' }) : res.status(200);

      // validate by the access token
      const accessToken = sign(
        {
          email: tokenUser.email,
          role: tokenUser.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        }
      );

      res.status(200).json({ token: accessToken });
    })
  );
};

/**
 * @desc Logout the current user
 * @route POST api/v1/auth/logout
 * @access public
 */
const userLogout = (req, res) => {
  res.clearCookie('access_token');
  res.status(200).json({ message: 'logOut successful' });
};

/**
 * @function register
 * @desc register a user
 * @route POST api/v1/auth/register
 * @access public
 */
const userRegister = asyncHandler(async (req, res) => {
  // get data from request body
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing data' });
  }

  // check the if user exist in database by email
  const isExist = await User.findOne({ email });
  if (isExist) {
    return res.status(400).json({ message: 'User already exist' });
  }

  // password encrypting before sending
  const hashPass = await hash(password, 10);

  // create new user
  const user = await User.create({ name, email, password: hashPass });

  res.status(200).json({ user, message: 'User created successful' });
});

/**
 * @function loggedInUser
 * @desc show me after logged in
 * @route POST api/v1/auth/me
 * @access public
 */
const loggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.me)
});

module.exports = {
  userLogin,
  userLogout,
  refreshToken,
  userRegister,
  loggedInUser,
};
