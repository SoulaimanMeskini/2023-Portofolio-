import React from 'react';

function Home(){
    return <h1>Home</h1>;
};

<<<<<<< Updated upstream
export default Home;
=======
export const HomeComponent = () => {
	return (
		<>
			<Home>
				<CircleLensComponent></CircleLensComponent>
			</Home>
		</>
	);
};

const Home = styled.div`
	p {
		color: whitesmoke;
	}
`;

export default HomeComponent;
>>>>>>> Stashed changes
