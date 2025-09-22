function joinStyles(...classNames: (string | null | undefined | false)[]): string {
	return classNames
		.filter((className): className is string => typeof className === 'string' && className.trim() !== '')
		.map(className => className.trim())
		.join(' ')
		.trim()
}

export {
	joinStyles,
}
