'use client'
import Pattern from "@/components/Pattern"
import { useState } from "react"

export default function Home() {
  const [color, setColor] = useState(false)
  return (
    <div>

      <Pattern />
    </div>
  )
}