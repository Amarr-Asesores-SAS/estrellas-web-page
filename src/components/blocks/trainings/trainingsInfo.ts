import Business from './Business'
import type { ITrainingCollection } from './Interfaces'
import ModelsTrainings from './ModelsTrainings'
import ModelTrainingPack from './ModelTrainingPack'

export const trainingItems: ITrainingCollection[] = [
	{
		title: 'Empresarial (Pack)',
		content: Business
	},
	{
		title: 'Para Modelos',
		content: ModelsTrainings
	},
	{
		title: 'Entrenamiento para modelos (Pack)',
		content: ModelTrainingPack
	}
]
