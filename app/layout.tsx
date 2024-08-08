import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kartikmehta18",
  description: "kartikmehta18 portfolio",

  openGraph: {
    type: 'website',
    url: 'https://kartikmehta18.vercel.app/', 
    title: "Kartik Mehta's Portfolio",
    description: "Discover the portfolio of Kartik Mehta, a passionate tech and community enthusiast, frontend developer, UI/UX designer, video editor, and open-source contributor.",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kartikmehta_png',
    title: "Kartik Mehta's Portfolio",
    description: "Discover the portfolio of Kartik Mehta, a passionate tech and community enthusiast, frontend developer, UI/UX designer, video editor, and open-source contributor.",
   
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
