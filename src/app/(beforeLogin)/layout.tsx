import styles from '@/app/(beforeLogin)/_component/main.module.css';
import {Props} from '@/app/types';

export default function Layout ({children, modal}: Props) {
	return (
		<div className={styles.container}>
			{children}
			{modal}
		</div>
	)
}