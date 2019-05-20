import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, SectionTitle } from '../styles/styledComponents';
import { about } from '../constants/aboutInfo';


const styles = {
	aboutContentText: styled.p`
		width: 75%;
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