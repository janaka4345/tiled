'use client'
import Pattern from "@/components/Pattern"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [color, setColor] = useState(false)
  return (
    <div>

      <Pattern />
      <Link href='/test'>test</Link>
    </div>
  )
}