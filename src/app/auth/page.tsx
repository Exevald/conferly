'use client'

import {useSearchParams} from 'next/navigation'
import {LoginForm, RegisterForm} from '@/shared/ui'

function AuthPage() {
	const searchParams = useSearchParams()
	const mode = searchParams.get('mode') || 'login'

	if (mode === 'register') {
		return <RegisterForm />
	}

	return <LoginForm />
}

export default AuthPage
