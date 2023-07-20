const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const tokenVerify = (req, res, next) => {
  const authHeader = req.cookies.access_token;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(
    authHeader,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (err, decode) => {
      if (err) {
        return res.status(403).json({ message: 'invalid token' });
      }

      const me = await User.findOne({ email: decode.email }).select('-password');

      req.me = me;

      next();
    })
  );
};

// const tokenVerify = (req, res, next) => {
//   const { authorization, Authorization } = req.headers;

//   const authHeader = req.headers.authorization || req.headers.Authorization;

//   !authHeader ? res.status(401).json({ message: 'Unauthorized' }) : next();

//   // split its token from bearer token
//   const token = authHeader.split(' ')[1];

//   // verify the token
//   verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
//     if (err) {
//       res.status(403).json({ message: 'Forbidden' });
//       return;
//     }

//     req.email = decode.email;
//     req.role = decode.role;
//     next();
//   });
// };

module.exports = { tokenVerify };
