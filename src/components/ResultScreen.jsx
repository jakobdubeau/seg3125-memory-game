"use client"

export default function ResultScreen({ won, moves, onPlayAgain }) {
  return (
    <section className="flex w-full max-w-md flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        {won ? "You Win!" : "Out of Moves"}
      </h1>

      <p className="text-white/50">
        {won
          ? `Solved in ${moves} ${moves === 1 ? "move" : "moves"}.`
          : "Better luck next time."}
      </p>

      <button
        type="button"
        onClick={onPlayAgain}
        className="cursor-pointer rounded-lg bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
      >
        Play Again
      </button>
    </section>
  )
}
