import style from '@/app/(beforeLogin)/_component/main.module.css';
import {DefaultType} from '@/app/types';

export default function Layout ({children, modal}: DefaultType) {
	return (
		<div className={style.container}>
			{children}
			{modal}
		</div>
	)
}