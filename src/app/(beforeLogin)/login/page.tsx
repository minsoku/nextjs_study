"use client";

import {useRouter} from 'next/navigation'
import Main from '@/app/(beforeLogin)/_component/Main'

export default function Login () {
	const router = useRouter ();
	router.replace ('/i/flow/login');
	return <Main />;
}

// router.push
// 3000/i/flow/login 에서 뒤로가기를 하면 3000/login 로 가고 여기서 또 뒤로가기를 하면 3000 로 간다.
// 3000 -> 3000/login -> 3000/i/flow/login

// router.replace
// 3000/i/flow/login 에서 뒤로가기를 하면 3000로 감
// 3000 -> 3000/login -> 3000/i/flow/login

