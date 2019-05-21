import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, SectionTitle } from '../styles/styledComponents';
import { about } from '../constants/aboutInfo';


const styles = {
	aboutContentText: styled.p`
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.5);
		padding 10px;
		margin: 10px 10px 25px 10px;
		width: inherit;
		justify-content: center;	
	`,
}

export default class About extends Component {
	render() {
		return (
			<Container id='about'>
				<SectionTitle>About</SectionTitle>
				<styles.aboutContentText>{about}</styles.aboutContentText>
			</Container>
		);
	}
}