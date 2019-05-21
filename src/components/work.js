import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import WorkBit from './reusable/WorkBit';
import { work } from '../constants/aboutInfo';
import { Container, SectionTitle } from '../styles/styledComponents';

const styles = {
	workSection: styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: inherit;
		margin: 10px 5px 25px 5px;

	`,
}

export default class Work extends Component {
	render() {
		return (
			<Container id='work'>
				<SectionTitle>Work</SectionTitle>
				<styles.workSection>
					{work.map((bit) => {
						return(
							<WorkBit
								key={v4()}
								bit={bit}
							/>
						);
					})}
				</styles.workSection>
			</Container>
		);
	}
}