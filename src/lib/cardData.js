export const levelConfig = {
  easy:   { cols: 4, rows: 2, pairs: 4,  moveLimit: null },
  medium: { cols: 4, rows: 4, pairs: 8,  moveLimit: 20 },
  hard:   { cols: 6, rows: 6, pairs: 18, moveLimit: 30 },
}

export const levelLabels = {
  easy:   "Easy",
  medium: "Medium",
  hard:   "Hard",
}

export const cardTypeLabels = {
  emojis: "Emojis",
  shapes: "Shapes",
}

export const cardData = {
  emojis: [
    "🐶", "🐱", "🦊", "🐻", "🐼", "🐨",
    "🦁", "🐯", "🐸", "🐵", "🐰", "🐹",
    "🐮", "🐷", "🐔", "🐧", "🦄", "🐙",
  ],
  shapes: [
    "circle", "square", "triangle", "diamond",
    "star", "heart", "pentagon", "hexagon",
    "octagon", "plus", "cloud", "lightning",
    "moon", "shield", "flame", "sun",
    "leaf", "droplet",
  ],
}

export const shapeColors = {
  circle:   "#ef4444",
  square:   "#f97316",
  triangle: "#eab308",
  diamond:  "#22c55e",
  star:     "#06b6d4",
  heart:    "#ec4899",
  pentagon: "#8b5cf6",
  hexagon:  "#14b8a6",
  octagon:  "#f59e0b",
  plus:     "#3b82f6",
  cloud:    "#a78bfa",
  lightning:"#fbbf24",
  moon:     "#818cf8",
  shield:   "#34d399",
  flame:    "#fb923c",
  sun:      "#fde047",
  leaf:     "#86efac",
  droplet:  "#7dd3fc",
}
