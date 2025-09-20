import {LoginForm, RegisterForm} from '@/shared/ui'

type AuthPageProps = {
	searchParams: Promise<{mode?: string}>,
}

async function AuthPage({searchParams}: AuthPageProps) {
	const params = await searchParams
	const mode = params.mode || 'login'

	if (mode === 'register') {
		return <RegisterForm />
	}

	return <LoginForm />
}

export default AuthPage
