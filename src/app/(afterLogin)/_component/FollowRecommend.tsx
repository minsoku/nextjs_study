"use client"

import style from './followRecommend.module.css';
import {useSession} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";

export default function FollowRecommend() {
  const {data: session} = useSession();
  const router = useRouter ();
  const onFollow = () => {
    if (!session?.user) {
      router.push('/i/flow/login')
    }
    return null;
  };
  const user = {
    id: 'induck',
    nickname: 'induck',
    image: '/zLogo.jpeg'
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  )
}