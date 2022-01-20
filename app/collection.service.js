import dataService from './data.service.js'

export default {
  async generateCardsTiles(userId, tilesNumber) {
    const { availableCardsIds } = await dataService.getUser(userId)

    // generate cards tiles
    const cardsTiles = generateCardsTiles(tilesNumber, availableCardsIds)

    // todo: save cards tiles and update user score

    return cardsTiles
  }
}

function generateCardsTiles(tilesNumber, cardsIds) {
  const cardsTiles = []

  // todo: generate cards tiles
  // cardsTiles.push([
  //   { id: cardsIds[0], index: 0 },
  //   { id: cardsIds[0], index: 5 }
  // ])

  return cardsTiles
}
