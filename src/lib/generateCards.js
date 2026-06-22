import { cardData, levelConfig } from "./cardData"

export function generateCards(level, cardType) {
  const { pairs } = levelConfig[level]
  const values = cardData[cardType].slice(0, pairs)

  const paired = [...values, ...values].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }))

  return paired.sort(() => Math.random() - 0.5)
}
