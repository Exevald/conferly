import {type Metadata} from 'next'
import {LAYOUT_CONSTANTS} from '@/shared/ui/constants'
import '@/shared/ui/design-system/design-system.css'
import Header from '@/shared/ui/Header/Header'

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
				<Header />
				<main
					style={{
						minHeight: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`,
						display: 'flex',
					}}
				>
					{children}
				</main>
			</body>
		</html>
	)
}

export {
	metadata,
}
export default RootLayout
