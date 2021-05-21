'use strict'

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Book = use("App/Models/Book.js")
const faker = require('faker');
const Env = use('Env')

const environments = ['development']
class BookSeeder {
  async run() {
    if (environments.includes(Env.get("APP_ENV"))) {
      for (let count = 0; count < 500; count++) {
        Book.create({
          "title": faker.lorem.word(),
          "description": faker.lorem.sentence(),
          "author": faker.name.findName(),
          "owner_id": Math.floor((Math.random() * 5) + 1)
        })
      }
    }

  }
}

module.exports = BookSeeder
