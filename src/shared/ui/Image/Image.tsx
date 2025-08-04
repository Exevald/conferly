'use client'

import {type ReactNode, useState} from 'react'
import styles from './Image.module.css'

type ImageProps = {
	src: string,
	alt: string,
	height?: number,
	width?: number,
	fallbackSrc?: string,
	className?: string,
	style?: React.CSSProperties,
}

function Image({
	src,
	alt,
	height,
	width,
	fallbackSrc,
	className = '',
	style,
}: ImageProps) {
	const [imageSrc, setImageSrc] = useState(src)
	const [hasError, setHasError] = useState(false)

	const handleError = () => {
		if (fallbackSrc && !hasError) {
			setImageSrc(fallbackSrc)
			setHasError(true)
		}
	}

	const imageStyle = {
		height: height
			? `${height}px`
			: 'auto',
		width: width
			? `${width}px`
			: '100%',
		...style,
	}

	return (
		<img
			src={imageSrc}
			alt={alt}
			className={`${styles.image} ${className}`}
			style={imageStyle}
			onError={handleError}
		/>
	)
}

export {
	Image,
	type ImageProps,
}
