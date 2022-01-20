import _ from 'lodash'
import collectionService from './collection.service.js'

(async function() {
  await Promise.all(
    _.range(10).map(() => collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  )
})()
  .then(() => console.log('All done')) // eslint-disable-line no-console
  .catch(err => console.log('ERROR', err)) // eslint-disable-line no-console
  .finally(() => process.exit())
