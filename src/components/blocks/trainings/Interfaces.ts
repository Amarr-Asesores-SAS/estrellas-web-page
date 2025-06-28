import type { ComponentType } from 'react'

export interface ITrainingItem {
	title: string
	titleStrong?: string
	description: string
	imgSrc: string
	imgFallback: string
	actionLink?: string
}

export interface ITrainingCollection {
	title: string
	content: ComponentType
}
