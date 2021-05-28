'use strict'

class BookValidator {
  get rules() {
    return {
      "title": "required",
      "description": "required",
      "author": "required"
    }
  }

  get messages() {
    return {
      "title.required": "Title is a required field",
      "description": "Description is a required field",
      "author": "Author is a required field"
    }
  }
}

module.exports = BookValidator
