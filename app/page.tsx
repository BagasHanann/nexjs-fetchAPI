import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1>Testing</h1>
			<Link href="/posts">Postingan</Link>
			<br />
			<Link href="/albums">Albums</Link>
		</>
	);
}
