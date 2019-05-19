import React, { Component } from 'react';
import styled from 'styled-components';
import ben from '../assets/img/profile.jpeg';

import { Container, SectionTitle } from '../styles/styledComponents';
import { about } from '../constants/aboutInfo';


const styles = {
	profile: styled.img`
		border: 2px solid #dbdbdb;
		border-radius: 100px;
		width: 200px;
	`,
	aboutContentText: styled.p`

	`,
}

export default class About extends Component {
	render() {
		return (
			<Container id='about'>
				<SectionTitle>About</SectionTitle>
				<styles.profile src={ben}/>
				<styles.aboutContentText>{about}</styles.aboutContentText>
			</Container>
		);
	}
}