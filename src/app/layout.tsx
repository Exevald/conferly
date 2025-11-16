import {type Metadata} from 'next'
import {QueryProvider} from '@/shared/providers/QueryProvider'
import {Header, PageLayout} from '@/shared/ui'
import '@/shared/ui/design-system/design-system.css'

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
				<QueryProvider>
					<Header />
					<PageLayout>
						{children}
					</PageLayout>
				</QueryProvider>
			</body>
		</html>
	)
}

export {
	metadata,
}
export default RootLayout
