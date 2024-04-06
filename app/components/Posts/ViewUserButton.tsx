'use client';

interface ViewUserButtonProps {
	userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
	const handleClick = () => {
		alert(`User id: ${userId}`);
	};

	return (
		<>
			<button onClick={handleClick} className="bg-white text-sm rounded-lg p-2">
				Lihat user
			</button>
		</>
	);
};

export default ViewUserButton;
