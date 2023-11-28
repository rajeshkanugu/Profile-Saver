"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <button onClick={() => {
        router.push('/profile/1')
      }}>click on me</button>
    </main>
  )
}
