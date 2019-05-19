import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from '../styles/styledComponents';

const styles = {
	container: styled.div`
		display: flex;
		flex-direction: column;	
		width: 50%;
	`,
	title: styled.h1`
		align-self: center;
	`,
	navigation: styled.div`
		display: flex;
		flex direction: row;
		justify-content: space-evenly;
		width: 100%;
	`,
	headerLink: styled.a`
		color: black;
		
	`,
}

export default class Header extends Component {
	render() {
		return(
			<Container>
				<styles.title>Ben Kirby</styles.title>
				<styles.navigation>
					<styles.headerLink href='#about'>About</styles.headerLink>
					<styles.headerLink href='#background'>Background</styles.headerLink>
					<styles.headerLink href='#work'>Work</styles.headerLink>
					<styles.headerLink href='#interests'>Interests</styles.headerLink>
					<styles.headerLink href='#contact'>Contact</styles.headerLink>
				</styles.navigation>
			</Container>
		);
	}
} 