import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
	bit: styled.div`
		margin: 5px 0 5px 0;
	`,
	title: styled.h3`

	`,
	jobinfo: styled.div`
		word-wrap: break-word;
	`
}

export default class SkillsBit extends Component {
	render() {
		return (
			<styles.bit>
				<styles.title>{this.props.bit.type}</styles.title>
				<styles.jobinfo>
					{this.props.bit.detail}
					</styles.jobinfo>
			</styles.bit>
		);
	}
}