import Navigation from './shared/Navbar'
import WordGenerator from './shared/WordGenerator'
import '/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* Malick */}
      <body className='container'>{children}</body>
      <Navigation />
      <WordGenerator />
    </html>
  )
}
