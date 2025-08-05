import {type NextRequest, NextResponse} from 'next/server'

function middleware(request: NextRequest) {
	if (request.nextUrl.pathname !== '/components') {
		return NextResponse.next()
	}

	if (process.env.NODE_ENV === 'production') {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}

const config = {
	matcher: '/components',
}

export {
	middleware,
	config,
}
