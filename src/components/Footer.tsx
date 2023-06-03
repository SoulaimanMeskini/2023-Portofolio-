import React from 'react';
import styled from 'styled-components';

import { Outlet, Link } from 'react-router-dom';

export const FooterComponent = () => {
	return (
		<>
			<Footer>
				<p>This is the footer.</p>
			</Footer>
		</>
	);
};

const Footer = styled.div`
	position: fixed;
	z-index: 21;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: black;
	color: white;
	text-align: center;

	p {
		&:hover {
			color: purple;
			cursor: default;
		}
	}
`;

export default FooterComponent;
