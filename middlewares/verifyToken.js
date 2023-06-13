const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const auth = req.headers.authorization;
  const token = auth.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = verifyToken;
