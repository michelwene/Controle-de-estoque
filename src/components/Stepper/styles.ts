import styled from "styled-components";

interface IProps {
	active: boolean;
}

export const StepperContainer = styled.div``;

export const WrapperDot = styled.div<IProps>`
	width: 28;
	height: 28;
	border-radius: 13;
	display: flex;
	align-items: center;
	align-content: center;
	background-color: "#4A90E2";
	margin-left: -14;

	background-color: ${({ active }) => (active ? "#4A90E2" : "#9B9B9B")};
`;

export const StepperDot = styled.div`
	color: "#FFF";
	margin: 5px;
`;

export const StepperWrapper = styled.div`
	border-left-color: "#999";
	border-left-width: 1;
	margin-left: 16;
	padding-bottom: 12;
	flex: 1;
	padding: 24px 0;
`;

export const StepperHeader = styled.div`
	margin-top: -30;
	margin-left: 24;
	margin-bottom: 24;
`;

export const Title = styled.h3`
	font-size: 15;
	font-weight: "400";
`;

export const Subtitle = styled.p`
	font-size: 13;
	font-weight: 300;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const StepperContent = styled.div<IProps>`
	margin-left: 24px;
	margin-bottom: 24px;
	margin-top: -12px;
	flex: 1;
	justify-content: space-between;
`;
