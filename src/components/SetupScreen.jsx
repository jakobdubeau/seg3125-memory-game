"use client"

export default function SetupScreen({ level, cardType, onLevelChange, onCardTypeChange, onStart }) {
  return (
    <section className="flex w-full max-w-lg flex-col gap-16">
      <h1 className="text-center text-8xl font-bold tracking-wider">Memory Match</h1>

      <div className="flex flex-col gap-4">
        <span className="text-sm uppercase tracking-widest text-white/50">Difficulty</span>
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => onLevelChange("easy")}
            className={`cursor-pointer rounded-xl border py-4 text-sm font-semibold uppercase tracking-widest transition-colors ${
              level === "easy"
                ? "border-emerald-400 bg-emerald-500/10 text-emerald-300"
                : "border-emerald-500/40 text-emerald-500/70 hover:border-emerald-400 hover:text-emerald-400"
            }`}
          >
            Easy
          </button>
          <button
            type="button"
            onClick={() => onLevelChange("medium")}
            className={`cursor-pointer rounded-xl border py-4 text-sm font-semibold uppercase tracking-widest transition-colors ${
              level === "medium"
                ? "border-amber-400 bg-amber-500/10 text-amber-300"
                : "border-amber-500/40 text-amber-500/70 hover:border-amber-400 hover:text-amber-400"
            }`}
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => onLevelChange("hard")}
            className={`cursor-pointer rounded-xl border py-4 text-sm font-semibold uppercase tracking-widest transition-colors ${
              level === "hard"
                ? "border-red-400 bg-red-500/10 text-red-300"
                : "border-red-500/40 text-red-500/70 hover:border-red-400 hover:text-red-400"
            }`}
          >
            Hard
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm uppercase tracking-widest text-white/50">Card Type</span>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => onCardTypeChange("emojis")}
            className={`cursor-pointer rounded-xl border py-4 text-sm font-medium tracking-wide transition-colors ${
              cardType === "emojis"
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
            }`}
          >
            Emojis
          </button>
          <button
            type="button"
            onClick={() => onCardTypeChange("shapes")}
            className={`cursor-pointer rounded-xl border py-4 text-sm font-medium tracking-wide transition-colors ${
              cardType === "shapes"
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
            }`}
          >
            Shapes
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="cursor-pointer rounded-xl bg-white py-5 text-sm font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
      >
        Start
      </button>
    </section>
  )
}
