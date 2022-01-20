// import Redis from 'ioredis'
import knex from './knex/index.js'

// const redis = new Redis(process.env.REDIS_URL)

export default {
  getUser(userId) {
    return knex('users')
      .select('id', 'score', 'availableCardsIds')
      .where({ id: userId })
      .first()
  }
}
