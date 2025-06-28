import type { ITrainingItem } from './Interfaces'
import { TrainingsCollectionCards } from './TrainingsCollectionCards'

const items: ITrainingItem[] = [
	{
		title: 'Cómo ser un estudio',
		titleStrong: 'exitoso',
		description:
			'Aprende estrategias para hacer tu estudio un referente: visión, procesos, equipo y propuesta única.',
		imgSrc: 'https://picsum.photos/112',
		imgFallback: 'EX'
	},
	{
		title: 'Entrevista &',
		titleStrong: 'perfilación',
		description:
			'Domina técnicas de entrevista y perfilación para seleccionar talento que impulse tu estudio.',
		imgSrc: 'https://picsum.photos/113',
		imgFallback: 'EP'
	},
	{
		title: 'Herramientas operativas',
		titleStrong: 'de las plataformas',
		description:
			'Usa herramientas y software para optimizar operaciones, productividad y decisiones en tu estudio.',
		imgSrc: 'https://picsum.photos/114',
		imgFallback: 'EP'
	},
	{
		title: 'Capacitación inicial de',
		titleStrong: 'modelos y monitores',
		description:
			'Forma modelos y monitores con programas que desarrollen habilidades técnicas y de liderazgo.',
		imgSrc: 'https://picsum.photos/115',
		imgFallback: 'CM'
	},
	{
		title: 'Creación de',
		titleStrong: 'empresa',
		description:
			'Crea tu empresa con un plan de negocios sólido, financiamiento y base para el crecimiento.',
		imgSrc: 'https://picsum.photos/116',
		imgFallback: 'CE'
	},
	{
		title: 'Legalidad',
		titleStrong: '',
		description:
			'Conoce aspectos legales clave: registros, contratos y cumplimiento para proteger tu estudio.',
		imgSrc: 'https://picsum.photos/117',
		imgFallback: 'LG'
	},
	{
		title: 'Contabilidad del',
		titleStrong: 'estudio',
		description:
			'Gestiona finanzas, presupuestos y obligaciones fiscales para la estabilidad de tu estudio.',
		imgSrc: 'https://picsum.photos/118',
		imgFallback: 'CO'
	},
	{
		title: 'Identidad de marca',
		titleStrong: 'corporativa',
		description:
			'Crea una marca poderosa con narrativa y diseño que refleje los valores de tu estudio.',
		imgSrc: 'https://picsum.photos/119',
		imgFallback: 'IM'
	},
	{
		title: 'Marketing digital y estratégico',
		titleStrong: 'RRSS',
		description:
			'Atrae clientes con campañas en redes sociales, contenido optimizado y métricas efectivas.',
		imgSrc: 'https://picsum.photos/120',
		imgFallback: 'MD'
	},
	{
		title: 'Reclutamiento',
		titleStrong: '',
		description:
			'Optimiza el reclutamiento para atraer talento que potencie el éxito de tu estudio.',
		imgSrc: 'https://picsum.photos/121',
		imgFallback: 'RE'
	}
]

const Business = () => {
	return <TrainingsCollectionCards items={items} />
}

export default Business
