'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up() {
    this.create('books', (table) => {
      table.increments() // id column
      table.string('title')
      table.timestamps() // created_at & updated_at column
    })
  }

  down() {
    this.drop('books')
  }
}

module.exports = BookSchema
