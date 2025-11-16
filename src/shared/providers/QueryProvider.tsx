'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {type PropsWithChildren, useState} from 'react'

function QueryProvider({children}: PropsWithChildren) {
	const [queryClient] = useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				refetchOnWindowFocus: false,
			},
		},
	}))

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}

export {
	QueryProvider,
}
