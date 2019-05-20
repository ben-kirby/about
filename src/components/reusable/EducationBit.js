import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
	bit: styled.div`
		margin-bottom: 10px;
	`,
	title: styled.h3`

	`,
	jobinfo: styled.p`
	
	`
}

export default class EducationBit extends Component {
	render() {
		return (
			<styles.bit>
				<styles.title>{this.props.bit.degree}</styles.title>
				<styles.jobinfo>{this.props.bit.school}, {this.props.bit.end}</styles.jobinfo>
			</styles.bit>
		);
	}
}