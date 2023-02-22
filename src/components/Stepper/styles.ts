import styled from "styled-components";

interface IProps {
	active?: boolean;
	lastIndex?: boolean;
}

export const StepperContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	margin-top: 1rem;
	padding-bottom: 1rem;
	flex: 1;

	height: auto;
`;

export const WrapperDot = styled.div``;

export const StepperDot = styled.div<IProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ active }) => (active ? "#4a90e2;" : "#999")};
	border-radius: 50%;

	width: 30px;
	height: 30px;
`;

export const StepperNumber = styled.span`
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const StepperLine = styled.div<IProps>`
	height: 100%;
	width: 1px;
	margin: 0 auto;

	border: ${({ lastIndex }) => (lastIndex ? "none" : "1px solid #999")};
`;

export const StepperWrapper = styled.div<IProps>`
	display: flex;
`;

export const StepperHeader = styled.div``;

export const Title = styled.h3`
	font-size: 15px;
	font-weight: 600;

	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Subtitle = styled.p`
	font-size: 13px;
	font-weight: 300;
	font-family: ${({ theme }) => theme.fonts.primary};
`;

export const StepperBody = styled.div`
	flex: 1;
`;

export const WrapperStepperBody = styled.div`
	margin-left: 1rem;
`;

export const StepperContent = styled.div<IProps>`
	margin-bottom: 24px;
	margin-top: 12px;

	row-gap: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: auto;
	min-height: 200px;
`;
