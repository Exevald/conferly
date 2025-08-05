import {type ReactNode} from 'react'
import {LAYOUT_CONSTANTS} from '@/shared/ui/constants'

type PageLayoutProps = {
	children: ReactNode,
}

function PageLayout({children}: PageLayoutProps) {
	return (
		<main
			style={{
				minHeight: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`,
				display: 'flex',
			}}
		>
			{children}
		</main>
	)
}

export {
	PageLayout,
}
