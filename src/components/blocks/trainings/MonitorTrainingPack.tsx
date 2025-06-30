import type { ITrainingItem } from './Interfaces'
import { TrainingsCollectionCards } from './TrainingsCollectionCards'

const items: ITrainingItem[] = [
	{
		title: 'Herramientas operativas de las',
		titleStrong: 'plataformas',
		description:
			'Domina herramientas y software para optimizar operaciones y gestionar plataformas webcam.',
		imgSrc: 'https://picsum.photos/148',
		imgFallback: 'HP'
	},
	{
		title: 'Entrevista &',
		titleStrong: 'perfilación',
		description:
			'Aprende técnicas de entrevista para seleccionar y perfilar modelos con alto potencial.',
		imgSrc: 'https://picsum.photos/149',
		imgFallback: 'EP'
	},
	{
		title: 'Marketing estratégico para',
		titleStrong: 'modelos',
		description:
			'Desarrolla estrategias de marketing para aumentar la visibilidad y éxito de los modelos.',
		imgSrc: 'https://picsum.photos/150',
		imgFallback: 'MM'
	},
	{
		title: 'Tareas obligatorias del',
		titleStrong: 'monitor',
		description:
			'Conoce las responsabilidades clave de un monitor para garantizar el éxito de los modelos.',
		imgSrc: 'https://picsum.photos/151',
		imgFallback: 'TM'
	},
	{
		title: 'Clases de monitoreo &',
		titleStrong: 'reporting',
		description:
			'Aprende técnicas de monitoreo y reporting para optimizar el rendimiento de los modelos.',
		imgSrc: 'https://picsum.photos/152',
		imgFallback: 'MR'
	},
	{
		title: 'Capacitación básica para',
		titleStrong: 'modelos',
		description:
			'Adquiere habilidades esenciales para iniciar tu carrera como modelo webcam con confianza.',
		imgSrc: 'https://picsum.photos/153',
		imgFallback: 'CB'
	},
	{
		title: 'Capacitación avanzada para',
		titleStrong: 'modelos',
		description: 'Perfecciona tus técnicas avanzadas para destacar como modelo webcam profesional.',
		imgSrc: 'https://picsum.photos/154',
		imgFallback: 'CA'
	},
	{
		title: 'Psicología de',
		titleStrong: 'modelos',
		description:
			'Entiende la psicología de los modelos para mejorar su motivación y desempeño profesional.',
		imgSrc: 'https://picsum.photos/155',
		imgFallback: 'PS'
	}
]

const MonitorTrainingPack = () => {
	return <TrainingsCollectionCards items={items} />
}

export default MonitorTrainingPack
