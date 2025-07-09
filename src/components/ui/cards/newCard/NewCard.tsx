import type { ComponentType } from 'react'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '../../card'
import { Button } from '../../button'
import { Avatar, AvatarFallback, AvatarImage } from '../../avatar'

interface Action {
	link: string
	label: string
	target?: '_blank' | '_self' | '_parent' | '_top'
}
interface HeaderImg {
	src: string
	bgColor?: string
	fallback: string
}

interface Props {
	headerImg?: HeaderImg
	title?: string
	description?: string
	action?: Action
	content?: ComponentType
	footer?: ComponentType
}

const NewCard = (props: Props) => {
	const { title, description, content: Content, footer: Footer, headerImg, action } = props
	return (
		<Card>
			<CardHeader className="flex items-center gap-4">
				{headerImg && (
					<Avatar className={`h-14 w-14 p-2 ${headerImg.bgColor ?? 'bg-transparent'}`}>
						<AvatarImage src={headerImg.src} />
						<AvatarFallback>{headerImg.fallback} </AvatarFallback>
					</Avatar>
				)}
				<div className="flex w-full items-center justify-between gap-4">
					<div>
						{title && <CardTitle>{title}</CardTitle>}
						{description && <CardDescription>{description}</CardDescription>}
					</div>
					{action && (
						<CardAction>
							<a className="h-full" href={action.link} target={action.target || '_blank'}>
								<Button variant={'link'} className="capitalize">
									{action.label}
								</Button>
							</a>
						</CardAction>
					)}
				</div>
			</CardHeader>
			{Content && (
				<CardContent>
					<Content />
				</CardContent>
			)}
			{Footer && (
				<CardFooter>
					<Footer />
				</CardFooter>
			)}
		</Card>
	)
}

export default NewCard
