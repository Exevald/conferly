'use client'

import {useSearchParams} from 'next/navigation'
import {LoginForm} from '@/shared/ui/LoginForm/LoginForm'
import {RegisterForm} from '@/shared/ui/RegisterForm/RegisterForm'

function AuthPage() {
	const searchParams = useSearchParams()
	const mode = searchParams.get('mode') || 'login'

	if (mode === 'register') {
		return <RegisterForm />
	}

	return <LoginForm />
}

export default AuthPage
