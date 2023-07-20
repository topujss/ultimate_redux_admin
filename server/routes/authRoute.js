const { Router } = require('express');
const {
  userLogin,
  refreshToken,
  userLogout,
  userRegister,
  loggedInUser,
} = require('../controllers/authController');
const { tokenVerify } = require('../middlewares/tokenVerify');

const router = Router();

// routing
router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/refresh').get(refreshToken);
router.route('/logout').post(userLogout);

// router.get('/me', loggedInUser);

router.route('/me').get(tokenVerify, loggedInUser);

// export
module.exports = router;
