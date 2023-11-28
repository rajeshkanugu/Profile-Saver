export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main>
            <h2>Data</h2>
            <div>
                {children}
            </div>
        </main>
    )
  }