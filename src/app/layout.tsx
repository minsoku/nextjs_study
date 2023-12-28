import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import style from '@/app/(beforeLogin)/_component/main.module.css';
import {Props} from '@/app/types'

const inter = Inter ({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout ({children}: Props) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	)
}
