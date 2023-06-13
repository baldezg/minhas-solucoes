const express = require('express');
const router = express.Router();

const teste1 = require('../controllers/teste1');
const teste2 = require('../controllers/teste2');
const teste3 = require('../controllers/teste3');
const teste4 = require('../controllers/teste4');
const teste5 = require('../controllers/teste5');

const verifyToken = require('../middlewares/verifyToken');

router.get("/user/:id", teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/users", teste2);
router.delete("/user/:id", verifyToken, teste3);
router.put("/user/:id", verifyToken, teste4);
router.get("/users/access/", teste5);

module.exports = router;