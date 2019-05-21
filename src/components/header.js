import React, { Component } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';

import ben from '../assets/img/profile.jpeg';
import { Container } from '../styles/styledComponents';

WebFont.load({
	google: {
		families: ['Quicksand']
	}
});

const styles = {
	container: styled.div`
		display: flex;
		flex-direction: column;	
		width: 50%;
	`,
	title: styled.h1`
		align-self: center;
		color: #247BA0;
		font-family: Quicksand;
		font-size: 3rem;
	`,
	navigation: styled.div`
		display: flex;
		flex direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: 100%;
	`,
	headerLink: styled.a`
		color: #247BA0;		
		font-style: italic;
		font-family: Quicksand;

	`,
	profile: styled.img`
		border: 3px solid #247BA0;;
		border-radius: 100px;
		width: 200px;
		margin-bottom: 35px;
	`,
}

export default class Header extends Component {
	render() {
		return(
			<Container>
				<styles.title>Ben Kirby</styles.title>
				<styles.profile src={ben} />
				<styles.navigation>
					<styles.headerLink href='#about'>About</styles.headerLink>
					<styles.headerLink href='#background'>Background</styles.headerLink>
					<styles.headerLink href='#work'>Work</styles.headerLink>
					<styles.headerLink href='#contact'>Contact</styles.headerLink>
				</styles.navigation>
			</Container>
		);
	}
} 