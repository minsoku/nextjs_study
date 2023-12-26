import styles from '@/app/page.module.css';
import {Props} from '@/app/types';

export default function Layout ({children, modal}: Props) {
	return (
		<div className={styles.container}>
			비포 로그인 레이아웃
			{children}
			{modal}
		</div>
	)
}