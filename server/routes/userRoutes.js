const { Router } = require('express');
const { getAllUser, createUser, getSingleUser, deleteUser, updateUser } = require('../controllers/userController');

const router = Router();

// routing
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getSingleUser).delete(deleteUser).patch(updateUser);

// export
module.exports = router;
