export const NEW_CARD = 'NEW_CARD'

export function newCard(card) {
  return {
    type: NEW_CARD,
    payload: card
  }
}
