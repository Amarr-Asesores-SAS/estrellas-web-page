import type { ITrainingCollection } from './Interfaces'
import Business from './Business'
import ModelsTrainings from './ModelsTrainings'
import ModelTrainingPack from './ModelTrainingPack'
import MonitorTrainingPack from './MonitorTrainingPack'

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
		title: 'Entrenamiento para Modelos (Pack)',
		content: ModelTrainingPack
	},
	{
		title: 'Entrenamiento para Monitores (Pack)',
		content: MonitorTrainingPack
	}
]
