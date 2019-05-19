import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, SectionTitle } from '../styles/styledComponents';

const styles = {
	content: styled.p`
	
	`,
}

export default class Background extends Component {
	render() {
		return (
			<Container id='background'>
				<SectionTitle>Background</SectionTitle>
			</Container>
		);
	}
}