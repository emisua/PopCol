import NavbarPop from '@/components/NavbarPop'

export const metadata = {
  title: 'Pop Coll',
  description: 'Gestiona tu colección de figuras pop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='bg-neutral-900 flex flex-col'>
        <NavbarPop />

        <main className='container max-w-screen-xl mx-auto dark'>
          {children}
        </main>
      </body>
    </html>
  )
}
