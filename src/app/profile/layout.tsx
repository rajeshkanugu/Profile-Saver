const style = {
  backgroundColor: '#f5f5f5',
}

// const hoverButton = {
//   backgroundColor: '#3a62f4',
//   colo:'white'
// }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="p-10 w-3/12 h-screen flex" style={style}>
        <aside className="flex gap-10 flex-col">
          <div className="flex gap-5">
            <input type="search" name="" id="" className="py-2 px-4 border-2 rounded-lg" placeholder="Search"/>
            <button className="border-2 py-3 px-5 rounded-lg text-blue-400 font-bold bg-white">New</button>
          </div>
          <div className="overflow-y-scroll">
            <ul className="text-lg px-2 flex flex-col gap-3">
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
              <li className={`px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white`} >Profile</li>
            </ul>
          </div>
        </aside>
        <div>
          {children}
        </div>
      </main>
    )
  }
  