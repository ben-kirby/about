import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Quicksand']
	}
});

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: center;
	background: rgba(255, 255, 255, 0.5);
	padding: 0 25px 25px 25px;
`;

export const SectionTitle = styled.h2`
	color: #247BA0;
	font-family: Quicksand;
`;

export const SectionContent = styled.div`
	align-items: center;
`;