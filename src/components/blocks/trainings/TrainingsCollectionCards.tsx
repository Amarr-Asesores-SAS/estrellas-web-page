import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import type { ITrainingItem } from './Interfaces'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface Props {
	items: ITrainingItem[]
}
export const TrainingsCollectionCards = ({ items }: Props) => {
	return (
		<>
			{items.map((item, index) => {
				const isRight = index % 2 !== 0 ? true : false
				return (
					<Card className="my-1">
						<div className={`flex justify-between ${isRight ? 'flex-row-reverse' : ''}`}>
							<CardHeader className="flex w-full flex-col items-center justify-center">
								<Avatar className="h-28 w-28">
									<AvatarImage src={item.imgSrc} />
									<AvatarFallback>{item.imgFallback}</AvatarFallback>
								</Avatar>
								{item.actionLink && (
									<a href={item.actionLink} target="_blank">
										<Button
											variant={'outline'}
											className="!border-primary-500 text-primary-300 mt-2 animate-pulse hover:animate-bounce"
										>
											Obtener
										</Button>
									</a>
								)}
							</CardHeader>
							<CardContent
								className={`flex min-w-3/4 flex-col ${isRight ? 'items-start' : 'items-end'}`}
							>
								<CardTitle className="pb-4">
									<h5>
										{item.title}
										{item.titleStrong && <strong className="ml-1">{item.titleStrong}</strong>}
									</h5>
								</CardTitle>
								<p className={`w-3/4 ${!isRight ? 'text-left' : ''}`}>{item.description}</p>
							</CardContent>
						</div>
					</Card>
				)
			})}
		</>
	)
}
