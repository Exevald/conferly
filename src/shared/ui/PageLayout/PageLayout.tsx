import {type ReactNode} from 'react'
import {LAYOUT_CONSTANTS} from '@/shared/ui/constants'

type PageLayoutProps = {
	children: ReactNode,
}

function PageLayout({children}: PageLayoutProps) {
	return (
		<main
			style={{
				height: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER_HEIGHT})`,
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
