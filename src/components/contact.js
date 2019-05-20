import React, { Component } from 'react';
import styled from 'styled-components';

import linkedIn from '../assets/icons/in.png';
import github from '../assets/icons/gh.png';
import { linkedInUrl, gitHubUrl } from '../constants/aboutInfo';
import { Container, SectionTitle } from '../styles/styledComponents';

const styles = {
	contactContainer: styled.div`
		display: flex;
		justify-content: space-evenly;
		width: 50%;
	`,

	info: styled.p`

	`,
	contactImage: styled.img`
		width: 40px;
		height: 40px;
	`,
	
};

export default class Contact extends Component{
	render() {
		return(
			<Container id='contact'>
				<SectionTitle>Contact</SectionTitle>
					<styles.info>benkrby@gmail.com</styles.info>
					<styles.info>503.737.9272</styles.info>
				<styles.contactContainer>
					<a href={linkedInUrl}>
						<styles.contactImage src={linkedIn} target="_blank"/>
					</a>
					<a href={gitHubUrl}>
						<styles.contactImage src={github} target="_blank"/>
					</a>
				</styles.contactContainer>

			</Container>
		);
	}
}