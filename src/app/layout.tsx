import './globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from 'react'
import {GlobalContext} from './globalContext'
import {UserProvider} from '@auth0/nextjs-auth0/client'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Snippet searcher dev',
  description: 'Add your custom snippets for the printscript language',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {

  return (
      <html lang="en">
      <body className={inter.className}>
      <UserProvider>
        <GlobalContext>
          {children}
        </GlobalContext>
      </UserProvider>
      </body>
      </html>
  )
}
