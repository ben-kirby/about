import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Container, SectionTitle } from '../styles/styledComponents';
import { background } from '../constants/aboutInfo';
import BackgroundBit from '../components/reusable/BackgroundBit';

const styles = {
	content: styled.p`
	
	`,
	containerOverride: {
		
	}
}

export default class Background extends Component {
	render() {
		return (
			<Container id='background'>
				<SectionTitle>Background</SectionTitle>
				{background.map((bit) => {
					return(
						<BackgroundBit
							key={v4()}
							bit={bit}
						/>
					);
				})}
			</Container>
		);
	}
}