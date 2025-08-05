import {type Metadata} from 'next'
import '@/shared/ui/design-system/design-system.css'
import Header from '@/shared/ui/Header/Header'
import {PageLayout} from '@/shared/ui/PageLayout/PageLayout'

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
			<body>
				<Header />
				<PageLayout>
					{children}
				</PageLayout>
			</body>
		</html>
	)
}

export {
	metadata,
}
export default RootLayout
