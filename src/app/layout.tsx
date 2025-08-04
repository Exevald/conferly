import {createTheme, MantineProvider} from '@mantine/core'
import {type Metadata} from 'next'
// eslint-disable-next-line import/order
import '@mantine/core/styles.css'
import {LAYOUT_CONSTANTS} from '@/shared/ui/constants'
import Header from '@/shared/ui/Header/Header'

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
			'#c2255c',
		],
	},
})

const metadata: Metadata = {
	title: 'Conferly',
	description: 'Система управления конференциями',
}

type RootLayoutProps = {
	children: React.ReactNode,
}

function RootLayout({children}: RootLayoutProps) {
	return (
		<html lang="ru">
			<body
				style={{
					margin: 0,
					padding: 0,
					minHeight: '100vh',
				}}
			>
				<MantineProvider
					theme={theme}
					defaultColorScheme="light"
				>
					<Header />
					<main
						style={{
							minHeight: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`,
							display: 'flex',
						}}
					>
						{children}
					</main>
				</MantineProvider>
			</body>
		</html>
	)
}

export {
	metadata,
}
export default RootLayout
