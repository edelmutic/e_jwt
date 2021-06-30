const UserModel = require('../models/user-models');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with such ${email} already exist`);
    }
    const user = await UserModel.create({ email, password });
  }
}

module.exports = new UserService();
