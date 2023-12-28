import Link from "next/link";
import style from './trend.module.css'
export default function Trend () {
  return (
    <Link href={`/search?q=트렌드`}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>밍소쿠</div>
      <div className={style.count}>1 posts</div>
    </Link>
  )
}