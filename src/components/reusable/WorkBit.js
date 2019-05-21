import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
	workContent: styled.div`
		display: flex;
		flex-direction: column;
		padding: 10px;
		background: rgba(255, 255, 255, 0.5);
		margin: 10px 5px 25px 5px;
		width: 33%;
		min-width: 200px;
		max-width: 250px;
		height: inherit;
		border-radius: 3px;

	`,
	workLink: styled.p`
		color: black;
	`,
}

export default class WorkBit extends Component{
	render(){
		return(
			<styles.workContent>
				<a href={this.props.bit.github}>
					<styles.workLink>{this.props.bit.title}</styles.workLink>
				</a>
					<p>{this.props.bit.description}</p>
				<p>Tech used: {this.props.bit.build}</p>
			</styles.workContent>
		);
	}
}