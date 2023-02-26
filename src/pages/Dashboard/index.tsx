import EmptyMessage from "components/EmptyMessage";
import { useSelector } from "react-redux";
import { selectReports } from "redux/reportsSlice";
import * as S from "./styles";

export default function Dashboard() {
	const reports = useSelector(selectReports);
	// console.log("reports: ", reports);

	return (
		<>
			<S.Container>
				<S.PageTitle>Dashboard</S.PageTitle>
				<S.Card>
					<S.CardHeader>
						<S.CardTitle>Lista de atividades</S.CardTitle>
					</S.CardHeader>
					<S.CardBody>
						{reports.length === 0 ? (
							<EmptyMessage text="Não há nenhum registro de atividade." />
						) : (
							<>
								{reports.map((report, index) => (
									<S.CardWrapper key={report + index}>
										<S.CardText>{report}</S.CardText>
									</S.CardWrapper>
								))}
							</>
						)}
					</S.CardBody>
				</S.Card>
			</S.Container>
		</>
	);
}
