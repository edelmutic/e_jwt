const userService = require('../services/user-service');

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
    } catch (e) {
      console.log(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async activation(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  async getUsers(req, res, next) {
    try {
      res.json([`123`, `456`]);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
