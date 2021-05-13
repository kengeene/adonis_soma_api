'use strict'

class LoginValidator {
  get rules() {
    return {
      "email": "required|email",
      "password": "required"
    }
  }

  get messages() {
    return {
      "email.email": "The email field should be a real email"
    }
  }
}

module.exports = LoginValidator
