import Business from './Business'
import type { ITrainingCollection } from './Interfaces'
import ModelsTrainings from './ModelsTrainings'

export const trainingItems: ITrainingCollection[] = [
	{
		title: 'Empresarial',
		content: Business
	},
	{
		title: 'Para Modelos',
		content: ModelsTrainings
	}
]
