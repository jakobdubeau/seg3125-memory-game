"use client"

import {
  Circle, Square, Triangle, Diamond, Star, Heart,
  Pentagon, Hexagon, Octagon, Plus, Cloud, Zap,
  Moon, Shield, Flame, Sun, Leaf, Droplet,
} from "lucide-react"
import { shapeColors } from "@/lib/cardData"

const shapeIcons = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
  diamond: Diamond,
  star: Star,
  heart: Heart,
  pentagon: Pentagon,
  hexagon: Hexagon,
  octagon: Octagon,
  plus: Plus,
  cloud: Cloud,
  lightning: Zap,
  moon: Moon,
  shield: Shield,
  flame: Flame,
  sun: Sun,
  leaf: Leaf,
  droplet: Droplet,
}

function CardFace({ value, cardType }) {
  if (cardType === "shapes") {
    const Icon = shapeIcons[value]
    return <Icon className="h-1/2 w-1/2" color={shapeColors[value]} strokeWidth={2} />
  }
  return <span className="text-[55cqw] leading-none">{value}</span>
}

export default function Card({ card, cardType, onFlip }) {
  const revealed = card.isFlipped || card.isMatched

  return (
    <button
      type="button"
      onClick={() => onFlip(card)}
      disabled={revealed}
      className={`@container aspect-square w-full perspective-midrange ${
        card.isMatched ? "opacity-40" : revealed ? "" : "cursor-pointer"
      }`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-300 transform-3d ${
          revealed ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-lg border border-white/10 bg-white/5 backface-hidden transition-colors hover:border-white/30 hover:bg-white/10" />
        <div className="absolute inset-0 flex rotate-y-180 items-center justify-center rounded-lg border border-white/30 bg-white/10 backface-hidden">
          <CardFace value={card.value} cardType={cardType} />
        </div>
      </div>
    </button>
  )
}
