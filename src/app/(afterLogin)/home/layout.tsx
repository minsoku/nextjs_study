export default async function HomeLayout ({children}) {
	console.log(children);
	console.log(2);
	return (
		<div>{children}
			홈레이아웃</div>
	)
} 