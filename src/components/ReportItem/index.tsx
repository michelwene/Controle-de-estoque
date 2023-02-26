import * as S from "./styles";

export default function ReportItem({ report }: { report: string }) {
	return (
		<S.CardWrapper>
			<S.CardText>{report}</S.CardText>
		</S.CardWrapper>
	);
}
