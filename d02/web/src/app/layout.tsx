import type { Metadata } from 'next'
import { Crimson_Pro, Lato } from 'next/font/google'

import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-lato', display: 'swap' })
const crimisonPro = Crimson_Pro({ subsets: ['latin'], weight: '600', variable: '--font-crimson-pro', display: 'swap' })

export const metadata: Metadata = {
  title: 'Desafio #02 - Product Card',
  description: 'Exemplo de card de um produto com a opção de imagem estática e animada',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${lato.variable} ${crimisonPro.variable}`} lang='en'>
      <body className='h-screen grid place-content-center bg-background'>{children}</body>
    </html>
  )
}
