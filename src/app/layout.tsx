import type {Metadata} from 'next'
import {MantineProvider, createTheme} from '@mantine/core'
import '@mantine/core/styles.css'
import Header from '@/shared/ui/Header'

const theme = createTheme({
    primaryColor: 'orange',
    colors: {
        orange: [
            '#fff4e6',
            '#ffe8cc',
            '#ffd8a8',
            '#ffc078',
            '#ffa94d',
            '#ff922b',
            '#FA5D20',
            '#e8590c',
            '#d63384',
            '#c2255c'
        ]
    }
})

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
                <MantineProvider
                    theme={theme}
                    defaultColorScheme="light"
                >
                    <Header />
                    <main>
                        {children}
                    </main>
                </MantineProvider>
            </body>
        </html>
    )
}

export default RootLayout 