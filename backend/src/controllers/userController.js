const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User(username, password, email);
    await User.create(user);
    res.status(201).send('User created');
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const [user] = await User.findById(req.params.id);
    if (user.length === 0) {
      return res.status(404).send('User not found');
    }
    res.json(user[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Otros métodos similares para getAllUsers, updateUser, deleteUser...
