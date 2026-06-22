"use client"

import { useState } from "react"
import { levelConfig } from "@/lib/cardData"
import { generateCards } from "@/lib/generateCards"
import SetupScreen from "@/components/SetupScreen"
import GameBoard from "@/components/GameBoard"
import ResultScreen from "@/components/ResultScreen"

export default function Home() {
  const [level, setLevel] = useState("easy")
  const [cardType, setCardType] = useState("emojis")
  const [gameStarted, setGameStarted] = useState(false)
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const { cols, moveLimit } = levelConfig[level]

  function startGame() {
    setCards(generateCards(level, cardType))
    setFlipped([])
    setMoves(0)
    setGameWon(false)
    setGameOver(false)
    setGameStarted(true)
  }

  function resetGame() {
    setGameStarted(false)
    setCards([])
    setFlipped([])
    setMoves(0)
    setGameWon(false)
    setGameOver(false)
  }

  function handleFlip(card) {
    if (flipped.length === 2) return
    if (card.isFlipped || card.isMatched) return
    if (gameWon || gameOver) return

    const flippedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    )
    const nextFlipped = [...flipped, card]
    setCards(flippedCards)
    setFlipped(nextFlipped)

    if (nextFlipped.length !== 2) return

    const nextMoves = moves + 1
    setMoves(nextMoves)
    const [first, second] = nextFlipped

    if (first.value === second.value) {
      const matchedCards = flippedCards.map((c) =>
        c.id === first.id || c.id === second.id ? { ...c, isMatched: true } : c
      )
      setCards(matchedCards)
      setFlipped([])

      if (matchedCards.every((c) => c.isMatched)) {
        setGameWon(true)
      } else if (moveLimit && nextMoves >= moveLimit) {
        setGameOver(true)
      }
    } else {
      if (moveLimit && nextMoves >= moveLimit) {
        setGameOver(true)
      }
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === first.id || c.id === second.id ? { ...c, isFlipped: false } : c
          )
        )
        setFlipped([])
      }, 1000)
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center p-6">
      {gameWon || gameOver ? (
        <ResultScreen won={gameWon} moves={moves} onPlayAgain={resetGame} />
      ) : gameStarted ? (
        <GameBoard
          cards={cards}
          cardType={cardType}
          cols={cols}
          moves={moves}
          moveLimit={moveLimit}
          onFlip={handleFlip}
          onQuit={resetGame}
        />
      ) : (
        <SetupScreen
          level={level}
          cardType={cardType}
          onLevelChange={setLevel}
          onCardTypeChange={setCardType}
          onStart={startGame}
        />
      )}
    </main>
  )
}
