const express = require("express");
const { create, update, del, list } = require('../controllers/announcement');
const { isAuthenticated, isAdmin } = require('../middleware/user');

const router = express.Router();

/**
 * list announcements route
 *
 * @path http://localhost:5000/api/announcement/
 * @method GET
 */
router.get("/", isAuthenticated, list);

/**
 * create announcement route
 *
 * @path http://localhost:5000/api/announcement/
 * @method POST
 */
router.post("/", isAuthenticated, create);

/**
 * update announcement route
 *
 * @path http://localhost:5000/api/announcement/:_id
 * @method PUT
 * @params _id
 */
router.put("/:_id", isAdmin, update);

/**
 * delete announcement route
 * 
 * @path http://localhost:5000/api/announcement/:_id
 * @method DELETE
 * @params _id
 */
router.delete("/:_id", isAdmin, del);

module.exports = router;
