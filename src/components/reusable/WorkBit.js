import React, { Component } from 'react';
import styled from 'styled-components';

const styles = {
	workContent: styled.div`
		display: flex;
		flex-direction: column;
		padding: 10px;
		background: rgba(255, 255, 255, 0.5);
		margin: 5px
		width: 300px
	`,
}

export default class WorkBit extends Component{
	render(){
		return(
			<styles.workContent>
				<p>{this.props.bit.title}</p>
			</styles.workContent>
		);
	}
}