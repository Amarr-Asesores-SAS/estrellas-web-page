import type { ITrainingItem } from './Interfaces'
import { TrainingsCollectionCards } from './TrainingsCollectionCards'

import astronautMedal from '@/assets/medals/medal-astronaut.webp'
import moneyMedal from '@/assets/medals/medal-money.webp'
import spacecraftMedal from '@/assets/medals/medal-spacecraft.webp'
import starMedal from '@/assets/medals/medal-star.webp'
import webcamMedal from '@/assets/medals/medal-webcam.webp'

const items: ITrainingItem[] = [
	{
		title: 'Herramientas operativas de las',
		titleStrong: 'plataformas',
		description:
			'Domina herramientas y software para optimizar operaciones y gestionar plataformas webcam.',
		imgSrc: astronautMedal.src,
		imgFallback: 'HP'
	},
	{
		title: 'Entrevista &',
		titleStrong: 'perfilación',
		description:
			'Aprende técnicas de entrevista para seleccionar y perfilar modelos con alto potencial.',
		imgSrc: moneyMedal.src,
		imgFallback: 'EP'
	},
	{
		title: 'Marketing estratégico para',
		titleStrong: 'modelos',
		description:
			'Desarrolla estrategias de marketing para aumentar la visibilidad y éxito de los modelos.',
		imgSrc: spacecraftMedal.src,
		imgFallback: 'MM'
	},
	{
		title: 'Tareas obligatorias del',
		titleStrong: 'monitor',
		description:
			'Conoce las responsabilidades clave de un monitor para garantizar el éxito de los modelos.',
		imgSrc: starMedal.src,
		imgFallback: 'TM'
	},
	{
		title: 'Clases de monitoreo &',
		titleStrong: 'reporting',
		description:
			'Aprende técnicas de monitoreo y reporting para optimizar el rendimiento de los modelos.',
		imgSrc: webcamMedal.src,
		imgFallback: 'MR'
	},
	{
		title: 'Capacitación básica para',
		titleStrong: 'modelos',
		description:
			'Adquiere habilidades esenciales para iniciar tu carrera como modelo webcam con confianza.',
		imgSrc: astronautMedal.src,
		imgFallback: 'CB'
	},
	{
		title: 'Capacitación avanzada para',
		titleStrong: 'modelos',
		description: 'Perfecciona tus técnicas avanzadas para destacar como modelo webcam profesional.',
		imgSrc: moneyMedal.src,
		imgFallback: 'CA'
	},
	{
		title: 'Psicología de',
		titleStrong: 'modelos',
		description:
			'Entiende la psicología de los modelos para mejorar su motivación y desempeño profesional.',
		imgSrc: spacecraftMedal.src,
		imgFallback: 'PS'
	}
]

const MonitorTrainingPack = () => {
	return <TrainingsCollectionCards items={items} />
}

export default MonitorTrainingPack
