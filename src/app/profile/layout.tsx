"use client"

import {useState, useEffect} from 'react'
import Link from 'next/link'

import styles from '@/app/profile/layout.module.css'

const style = {
  backgroundColor: '#f5f5f5',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [selectedItem, setSelectedItem] = useState<number>(0)

    return (
      <main className="p-10 w-screen h-screen flex" style={style}>
        <aside className="flex w-3/12 gap-10 flex-col">
          <div className="flex gap-5">
            <input type="search" name="" id="" className="py-2 px-4 border-2 rounded-lg" placeholder="Search"/>
            <button className="border-2 py-3 px-5 rounded-lg text-blue-400 font-bold bg-white">New</button>
          </div>
          <div className="overflow-y-scroll">
            <ul className="text-lg px-2 flex flex-col gap-3">
              {/* @ts-ignore */}
              <Link href={'/profile/1'}><li className={`px-3 py-2 rounded-lg hover:bg-blue-600  ${selectedItem == 1 ? 'bg-blue-600 text-white' : ''} hover:text-white hover:cursor-pointer transition ease-in-out`} onClick={() => setSelectedItem(1)}>Profile</li></Link>
              <Link href={'/profile/2'}><li className={`px-3 py-2 rounded-lg hover:bg-blue-600  ${selectedItem == 2 ? 'bg-blue-600 text-white' : ''} hover:text-white hover:cursor-pointer transition ease-in-out`} onClick={() => setSelectedItem(2)}>Profile</li></Link>
            </ul>
          </div>
        </aside>
        <div>
          {children}
        </div>
      </main>
    )
  }
  