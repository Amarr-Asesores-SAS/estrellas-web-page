import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ITrainingItem } from './Interfaces'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface Props {
	items: ITrainingItem[]
}
export const TrainingsCollectionCards = ({ items }: Props) => {
	return (
		<div className="flex flex-wrap justify-center gap-4">
			{items.map((item, index) => {
				const isRight = index % 2 !== 0 ? true : false
				return (
					<Card className="items-center md:w-[calc(50%-0.5rem)] md:flex-none" key={item.title}>
						<div
							className={`mx-6 flex h-full justify-between gap-4 ${isRight ? 'flex-row-reverse' : ''}`}
						>
							<CardHeader className="flex w-full flex-col items-center justify-center px-0">
								<Avatar className="h-fit w-full animate-bounce hover:animate-spin">
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
								className={`flex min-w-3/4 flex-col justify-between px-0 ${isRight ? 'items-start' : 'items-end'}`}
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
		</div>
	)
}
