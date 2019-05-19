import React, { Component } from 'react';
import styled from 'styled-components';

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
	`,
}

export default class Header extends Component {
	render() {
		return(
			<styles.container>
				<styles.title>Ben Kirby</styles.title>
				<styles.navigation>
					<p>1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>

				</styles.navigation>
			</styles.container>
		);
	}
} 