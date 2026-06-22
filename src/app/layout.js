import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})

export const metadata = {
  title: "Memory Match",
  description: "A card-matching memory game",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  )
}
