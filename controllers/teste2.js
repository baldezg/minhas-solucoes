require('dotenv').config();
const data = require("../fakeData");
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
  const { id, name, job} = req.body;

  if (!id || !name || !job) {
    return res.status(400).send({
      error: "Missing required fields"
    });
  }

  const existingUser = data.find(user => user.id === Number(id));
  if (existingUser) {
    return res.status(409).send({
      error: "User with this ID already exists"
    });
  }

  const newUser = {
    id,
    name,
    job,
    views: 0
  };
  const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  data.push(newUser);

  res.status(201).send({
    message: "User created successfully",
    user: newUser,
    token: token
  });
};

module.exports = createUser;
