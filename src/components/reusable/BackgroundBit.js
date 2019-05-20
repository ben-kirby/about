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

export default class BackgroundBit extends Component{
	render(){
		return(
			<styles.bit>
				<styles.title>{this.props.bit.title}</styles.title>
				<styles.jobinfo>{this.props.bit.company}: {this.props.bit.start}-{this.props.bit.end}</styles.jobinfo>
			</styles.bit>
		);
	}
}