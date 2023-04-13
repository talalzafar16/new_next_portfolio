import './globals.css'


export const metadata = {
  title: `Talal's Portfolio`,
  description: 'Know more about Talal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth'  lang="en">
      <body >{children}</body>
    </html>
  )
}
