import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Conferly',
    description: 'Система управления конференциями'
}

type RootLayoutProps = {
    children: React.ReactNode
}

function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout 