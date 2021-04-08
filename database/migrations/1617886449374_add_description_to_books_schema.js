'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDescriptionToBooksSchema extends Schema {
  up() {
    this.table('books', (table) => {
      //create a description table after title
      table.text('desciption').after('title')
    })
  }

  down() {
    this.table('books', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddDescriptionToBooksSchema
