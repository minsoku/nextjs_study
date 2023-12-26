import {Props} from '@/app/types'

export default async function HomeLayout ({children}: Props) {

	return (
		<div>
			{children}
			홈레이아웃
		</div>
	)
}