import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';
import styled from 'styled-components';

const ContainerStyled = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.background};
`;

const BodyStyled = styled.View`
	width: 100%;
	height: 250px;
	padding-horizontal: 10;
	background: #fff;
	justify-content: center;
	align-items: center;
`;

export default function Home({ description }) {
	return (
		<ContainerStyled>
			<BodyStyled>
				<Text>{description}</Text>
			</BodyStyled>
		</ContainerStyled>
	);
}

Home.propTypes = {
	description: string
};
