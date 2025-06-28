import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

import { trainingItems as items } from './trainingsInfo'

function TrainingsAccordion() {
	return (
		<Accordion type="single" collapsible className="mx-auto w-5/6" defaultValue="item-1">
			{items.map((item, index) => {
				const { title, content: Content } = item
				return (
					<AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
						<AccordionTrigger>
							<h3>
								<strong>{title}</strong>
							</h3>
						</AccordionTrigger>
						<AccordionContent>
							<Content />
						</AccordionContent>
					</AccordionItem>
				)
			})}
		</Accordion>
	)
}
export default TrainingsAccordion
