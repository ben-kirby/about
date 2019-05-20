import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import BackgroundBit from '../components/reusable/BackgroundBit';
import EducationBit from '../components/reusable/EducationBit';
import SkillsBit from '../components/reusable/SkillsBit';

import { Container, SectionTitle } from '../styles/styledComponents';
import { background, education, skills } from '../constants/aboutInfo';

const styles = {
	containerOverride: {
	},
	bitSection: styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: inherit;
	`,
	backgroundBit: styled.div`
		display: flex;
		flex-direction: column;
		padding 10px;
		margin: 10px 5px 0 5px;
		background: rgba(255, 255, 255, 0.5);
		width: 33%;
		min-width: 225px;
		max-width: 250px;
	`,
}

export default class Background extends Component {
	render() {
		return (
			<Container id='background'>
				<SectionTitle>Background</SectionTitle>
				<styles.bitSection>
					<styles.backgroundBit>
						{background.map((bit) => {
							return(
								<BackgroundBit
									key={v4()}
									bit={bit}
								/>
							);
						})}
					</styles.backgroundBit>
					<styles.backgroundBit>
						{education.map((bit) => {
							return(
								<EducationBit
									key={v4()}
									bit={bit}
								/>
							);
						})}
					</styles.backgroundBit>
					<styles.backgroundBit>
						{skills.map((bit) => {
							return(
								<SkillsBit
									key={v4()}
									bit={bit}
								/>
							)
						})}
					</styles.backgroundBit>
				</styles.bitSection>	
			</Container>
		);
	}
}