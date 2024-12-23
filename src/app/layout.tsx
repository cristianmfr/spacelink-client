import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ApolloProvider from '@/components/providers/apollo-provider'
import { Toaster } from 'sonner'
import { Suspense } from 'react'
import Loading from '@/components/loading'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Spacelink | Members Club',
    description: 'Clube de membros da telecom Spacelink.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='pt-BR' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                >
                    <ApolloProvider>
                        <Suspense fallback={<Loading />}>{children}</Suspense>
                    </ApolloProvider>
                    <Toaster richColors />
                </ThemeProvider>
            </body>
        </html>
    )
}
