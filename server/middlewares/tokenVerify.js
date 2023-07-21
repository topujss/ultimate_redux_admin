const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const tokenVerify = (req, res, next) => {
  const accessToken = req.cookies.access_token;

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(
    accessToken,
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

module.exports = { tokenVerify };
