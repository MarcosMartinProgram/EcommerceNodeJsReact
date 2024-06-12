const db = require('../config/db');

class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static create(user) {
    return db.execute(
      'INSERT INTO users (username, password, email, created_at) VALUES (?, ?, ?, NOW())',
      [user.username, user.password, user.email]
    );
  }

  static findById(id) {
    return db.execute('SELECT * FROM users WHERE id = ?', [id]);
  }

  static findAll() {
    return db.execute('SELECT * FROM users');
  }

  static update(id, user) {
    return db.execute(
      'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?',
      [user.username, user.password, user.email, id]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = User;
