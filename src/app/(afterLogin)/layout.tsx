import {Props} from '@/app/types'

export default function AfterLoginLayout({ children }: Props) {
	return (
		<div>
			에프터 로그인 레이아웃
			{children}
		</div>
	)
}