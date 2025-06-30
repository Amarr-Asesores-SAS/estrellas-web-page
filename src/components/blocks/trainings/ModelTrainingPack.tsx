import type { ITrainingItem } from './Interfaces'
import { TrainingsCollectionCards } from './TrainingsCollectionCards'

const items: ITrainingItem[] = [
	{
		title: 'Shows programados y',
		titleStrong: 'tipos de shows',
		description:
			'Aprende a planificar shows y explorar distintos tipos para cautivar a tu audiencia webcam.',
		imgSrc: 'https://picsum.photos/135',
		imgFallback: 'SP'
	},
	{
		title: 'Educación financiera con',
		titleStrong: 'plan de retiro by Ander',
		description:
			'Domina tus finanzas y crea un plan de retiro con estrategias adaptadas para modelos webcam.',
		imgSrc: 'https://picsum.photos/136',
		imgFallback: 'EF'
	},
	{
		title: 'Psicología del',
		titleStrong: 'consumidor',
		description:
			'Entiende el comportamiento de tu audiencia para mejorar la interacción y fidelización.',
		imgSrc: 'https://picsum.photos/137',
		imgFallback: 'PC'
	},
	{
		title: 'Website',
		titleStrong: '(capacitación x página)',
		description:
			'Crea y optimiza tu página web para promocionar tu marca como modelo webcam profesional.',
		imgSrc: 'https://picsum.photos/138',
		imgFallback: 'WS'
	},
	{
		title: 'Profesionalización en el',
		titleStrong: 'modelaje webcam',
		description:
			'Eleva tu carrera con técnicas para profesionalizar tu trabajo en la industria webcam.',
		imgSrc: 'https://picsum.photos/139',
		imgFallback: 'PM'
	},
	{
		title: 'Branding de',
		titleStrong: 'modelo',
		description:
			'Construye una marca única que destaque tu estilo y atraiga a tu público objetivo.',
		imgSrc: 'https://picsum.photos/140',
		imgFallback: 'BM'
	},
	{
		title: 'Marketing estratégico para',
		titleStrong: 'modelo',
		description:
			'Desarrolla estrategias de marketing para aumentar tu visibilidad y alcance como modelo.',
		imgSrc: 'https://picsum.photos/141',
		imgFallback: 'ME'
	},
	{
		title: 'Manejo de RRSS',
		titleStrong: 'Modelos',
		description:
			'Optimiza tus redes sociales para conectar con tu audiencia y crecer como modelo webcam.',
		imgSrc: 'https://picsum.photos/142',
		imgFallback: 'RR'
	},
	{
		title: 'Diversificar tus',
		titleStrong: 'ingresos (modelos)',
		description:
			'Explora formas de diversificar tus ingresos como modelo para mayor estabilidad económica.',
		imgSrc: 'https://picsum.photos/143',
		imgFallback: 'DI'
	},
	{
		title: 'Creación de',
		titleStrong: 'personaje',
		description:
			'Diseña un personaje auténtico que potencie tu presencia y conexión en sesiones webcam.',
		imgSrc: 'https://picsum.photos/144',
		imgFallback: 'CP'
	},
	{
		title: 'Asesoría de',
		titleStrong: 'imagen',
		description:
			'Mejora tu imagen personal con técnicas para destacar en tus presentaciones webcam.',
		imgSrc: 'https://picsum.photos/145',
		imgFallback: 'AI'
	},
	{
		title: 'Proxémica y comportamiento frente a',
		titleStrong: 'cámara',
		description: 'Domina el lenguaje corporal y la proxémica para impactar frente a la cámara.',
		imgSrc: 'https://picsum.photos/146',
		imgFallback: 'PX'
	},
	{
		title: 'Fotografía e iluminación para',
		titleStrong: 'contenido',
		description:
			'Aprende técnicas de fotografía e iluminación para crear contenido visual de calidad.',
		imgSrc: 'https://picsum.photos/147',
		imgFallback: 'FI'
	}
]

const ModelTrainingPack = () => {
	return <TrainingsCollectionCards items={items} />
}

export default ModelTrainingPack
