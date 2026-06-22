"use client"

import Card from "./Card"

export default function GameBoard({ cards, cardType, cols, moves, moveLimit, onFlip, onQuit }) {
  return (
    <section className="flex w-full max-w-2xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm uppercase tracking-widest text-white/50">
          Moves: {moveLimit ? `${moves} / ${moveLimit}` : moves}
        </span>
        <button
          type="button"
          onClick={onQuit}
          className="text-sm uppercase tracking-widest text-white/50 transition-colors hover:text-white hover:cursor-pointer"
        >
          Quit
        </button>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {cards.map((card) => (
          <Card key={card.id} card={card} cardType={cardType} onFlip={onFlip} />
        ))}
      </div>
    </section>
  )
}
