//importation
const express = require("express");
const { create, login, list, del, getCurrentUser, update } = require("../controllers/user");
const { isAuthenticated, isSameAsConnectedUser, isAdmin } = require('../middleware/user');
const { registerValidation, validation, loginValidation } = require("../middleware/validator");

//importation router
const router = express.Router();

/**
 * list users route
 * 
 * @path http://localhost:5000/api/user/
 * @method GET
 */
router.get('/', isAdmin, list);

/**
 * update user
 * 
 * @path http://localhost:5000/api/user/:_id
 * @method PUT
 * @params _id
 */
router.put('/:_id', isAuthenticated, isSameAsConnectedUser, validation, update);

/**
 * signup route
 * 
 * @path http://localhost:5000/api/user/signup
 * @method POST
 */
router.post('/signup', registerValidation, validation, create);

/**
 * signin route
 * 
 * @path http://localhost:5000/api/user/signin
 * @method POST
 */
router.post('/signin', loginValidation, validation, login);

/**
 * delete user route
 * 
 * @path http://localhost:5000/api/user/:_id
 * @method DELETE
 * @params _id
 */
router.delete('/:_id', isAuthenticated, isSameAsConnectedUser, del);

/**
 * currently connected user route
 * 
 * @path http://localhost:5000/api/user/current
 * @method GET
 */
router.get('/current', isAuthenticated, getCurrentUser);

module.exports = router;
