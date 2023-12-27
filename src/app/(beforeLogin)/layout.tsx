import style from '@/app/(beforeLogin)/_component/main.module.css';
import {Props} from '@/app/types';

export default function Layout ({children, modal}: Props) {
	return (
		<div className={style.container}>
			{children}
			{modal}
		</div>
	)
}