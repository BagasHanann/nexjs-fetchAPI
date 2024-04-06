import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

interface Iposts {
	userId: number;
	id: number;
	title: string;
	body: string;
}
const Posts = async () => {
	const response = await fetch(base_url);
	const posts: Iposts[] = await response.json();
	return (
		<>
			<div className="text-fuchsia-500">page</div>
			{posts.map((post) => (
				<CardList key={post.body}>
					<h1 className="text-xl mb-2">{post.title}</h1>
					<p className="">{post.body}</p>
					<ViewUserButton userId={post.userId} />
				</CardList>
			))}
		</>
	);
};

export default Posts;
