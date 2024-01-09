import { ThemeProvider } from '@/components/theme-provider'
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
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <body className='dark:bg-neutral-900 flex flex-col'>
          <NavbarPop />

          <main className='container max-w-screen-xl mx-auto'>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  )
}
