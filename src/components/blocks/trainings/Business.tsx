import type { ITrainingItem } from './Interfaces'
import { TrainingsCollectionCards } from './TrainingsCollectionCards'

import astronautMedal from '@/assets/medals/medal-astronaut.png'
import moneyMedal from '@/assets/medals/medal-money.png'
import spacecraftMedal from '@/assets/medals/medal-spacecraft.png'
import starMedal from '@/assets/medals/medal-star.png'
import webcamMedal from '@/assets/medals/medal-webcam.png'

const items: ITrainingItem[] = [
	{
		title: 'Cómo ser un estudio',
		titleStrong: 'exitoso',
		description:
			'Aprende estrategias para hacer tu estudio un referente: visión, procesos, equipo y propuesta única.',
		imgSrc: astronautMedal.src,
		imgFallback: 'EX'
	},
	{
		title: 'Entrevista &',
		titleStrong: 'perfilación',
		description:
			'Domina técnicas de entrevista y perfilación para seleccionar talento que impulse tu estudio.',
		imgSrc: moneyMedal.src,
		imgFallback: 'EP'
	},
	{
		title: 'Herramientas operativas',
		titleStrong: 'de las plataformas',
		description:
			'Usa herramientas y software para optimizar operaciones, productividad y decisiones en tu estudio.',
		imgSrc: spacecraftMedal.src,
		imgFallback: 'EP'
	},
	{
		title: 'Capacitación inicial de',
		titleStrong: 'modelos y monitores',
		description:
			'Forma modelos y monitores con programas que desarrollen habilidades técnicas y de liderazgo.',
		imgSrc: starMedal.src,
		imgFallback: 'CM'
	},
	{
		title: 'Creación de',
		titleStrong: 'empresa',
		description:
			'Crea tu empresa con un plan de negocios sólido, financiamiento y base para el crecimiento.',
		imgSrc: webcamMedal.src,
		imgFallback: 'CE'
	},
	{
		title: 'Legalidad',
		titleStrong: '',
		description:
			'Conoce aspectos legales clave: registros, contratos y cumplimiento para proteger tu estudio.',
		imgSrc: astronautMedal.src,
		imgFallback: 'LG'
	},
	{
		title: 'Contabilidad del',
		titleStrong: 'estudio',
		description:
			'Gestiona finanzas, presupuestos y obligaciones fiscales para la estabilidad de tu estudio.',
		imgSrc: moneyMedal.src,
		imgFallback: 'CO'
	},
	{
		title: 'Identidad de marca',
		titleStrong: 'corporativa',
		description:
			'Crea una marca poderosa con narrativa y diseño que refleje los valores de tu estudio.',
		imgSrc: spacecraftMedal.src,
		imgFallback: 'IM'
	},
	{
		title: 'Marketing digital y estratégico',
		titleStrong: 'RRSS',
		description:
			'Atrae clientes con campañas en redes sociales, contenido optimizado y métricas efectivas.',
		imgSrc: starMedal.src,
		imgFallback: 'MD'
	},
	{
		title: 'Reclutamiento',
		titleStrong: '',
		description:
			'Optimiza el reclutamiento para atraer talento que potencie el éxito de tu estudio.',
		imgSrc: webcamMedal.src,
		imgFallback: 'RE'
	}
]

const Business = () => {
	return <TrainingsCollectionCards items={items} />
}

export default Business
